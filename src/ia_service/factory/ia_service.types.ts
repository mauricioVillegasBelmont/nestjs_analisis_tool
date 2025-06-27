import  {choices as DeepSeekChoices , DeepSeekAPI_query, DeepSeekChatResponceSchema}  from '../providers/DeepSeekAPI.types';


export type IAProvider = 'deepseek' | 'openia' | 'grok';
export type IAConfig =
  | Partial<DeepSeekAPI_query>

export type IAResponse =
  | Partial<DeepSeekChatResponceSchema>


export type IACleanResponse =
  | DeepSeekChoices[]
