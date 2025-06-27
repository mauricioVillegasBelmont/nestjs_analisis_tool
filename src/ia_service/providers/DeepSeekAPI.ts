import axios from "axios";
import { DeepSeekAPI_query } from "./DeepSeekAPI.types";
import { DeepSeekChatResponceSchema, choices } from './DeepSeekAPI.types'

export default class DeepSeekAPI {
  public name = 'Deepseek API';
  private query_config: DeepSeekAPI_query = {
    system_role: "You are a helpful assistant.",
    model: "deepseek-chat",
    response_type: 'text',
    max_tokens: 2048,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop: null,
    stream: false,
    stream_options: null,
    top_p: 1,
    tools: null,
    tool_choice: "none",
    logprobs: false,
    top_logprobs: null,
    temperature: 1.3,
  };
  private request = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api.deepseek.com/chat/completions',
    headers: { 
      'Content-Type': 'application/json', 
      'Accept': 'application/json', 
      'Authorization': `Bearer ${process.env.DEEPSEEK_APIKEY || ''}`
    },
    data: {}
  };
  
  cleanResponse(response:DeepSeekChatResponceSchema):choices[]{
    return response.choices
  }

  async query(query:string, conf:Partial<DeepSeekAPI_query>={}):Promise<DeepSeekChatResponceSchema> {
    const { system_role, response_type, ...data_config } = {...this.query_config, ...conf};
    const config = this.request
    config.data = JSON.stringify({
      messages: [
        { role: "system", content: system_role },
        { role: "user", content: query }
      ],
      response_format: {
        type: response_type
      },
      ...data_config
    })

    return await axios(config)
    .then((response) => response.data)
    .catch((error) => {
      return error.response?.data || error.message || 'Unknown error';
    });
  }
}