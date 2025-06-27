export interface DeepSeekAPI_query{
  system_role: string;
  model: 'deepseek-chat'|'deepseek-reasoner';
  response_type: 'text'|'json_object';

  max_tokens: number,
  frequency_penalty: number,
  presence_penalty: number,
  stop: null|{[key:string]:any},
  stream: boolean,
  stream_options: null|{[key:string]:any},
  top_p: number,
  tools: null|{[key:string]:any},
  tool_choice: "none"|"auto"|"required",
  logprobs: boolean,
  top_logprobs: null|number,
  temperature: number
}

export interface tool_calls{
  "id": string,
  "type": "function",
  "function": {
    "name": string,
    "arguments": string
  }
}

export interface content_logprob{
  "token": string,
  "logprob": number,
  "bytes": number[]
}
export interface content{
  "token": string,
  "logprob": 0,
  "bytes": [
    0
  ],
  "top_logprobs": content_logprob[]
}

export interface choices{
  "finish_reason": string,
  "index": number,
  "message": {
    "content": string,
    "reasoning_content": string,
    "tool_calls": tool_calls[],
    "role": "assistant"
  },
  "logprobs": {
    "content": content[]
  }
}

export interface DeepSeekChatResponceSchema {
  "id": string,
  "choices": choices[],
  "created": number,
  "model": string,
  "system_fingerprint": string,
  "object": "chat.completion",
  "usage": {
    "completion_tokens": number,
    "prompt_tokens": number,
    "prompt_cache_hit_tokens": number,
    "prompt_cache_miss_tokens": number,
    "total_tokens": number,
    "completion_tokens_details": {
      "reasoning_tokens": number
    }
  }
}