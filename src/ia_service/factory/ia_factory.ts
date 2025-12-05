import DeepseekAPI from 'ia_service/providers/DeepSeekAPI';
import type {
  IACleanResponse,
  IAConfig,
  IAProvider,
  IAResponse,
} from 'ia_service/factory/ia_service.types';



export class IAFactory{

  private service: DeepseekAPI;
  private serviceName: IAProvider;



	constructor(serviceProvider = 'deepseek'){
		this.set(serviceProvider);
	}

	/**
	* @param string message
	* @return string
	*/
	public set(serviceProvider = 'deepseek'){
		switch (serviceProvider) {
			case 'deepseek':
			default:
				this.serviceName = 'deepseek';
				this.service = new DeepseekAPI();
				break;
		}
	}

	public cleanResponse(responces):IACleanResponse {
		return this.service.cleanResponse(responces)
	}

	/**
	* @param string message
	* @return string
	*/
	public query(query, config:IAConfig = {}):Promise<IAResponse>{
    try{
      if (!query) {
        throw new Error("User message query is required");
      }
      const response = this.service.query(query, config);
      if (response) {
        return response;
      } else {
        throw new Error(`${this.service.name} response.`);
      }
    }catch (e) {
    	throw new Error( `Caught error: ${e.message}`);
    }
	}

}
