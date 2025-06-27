import * as fs from 'node:fs'


type serviceAccountCredentials = {
  type: string;
  project_id:string;
  private_key_id:string;
  private_key:string;
  client_email:string;
  client_id:string;
  auth_uri:string;
  token_uri:string;
  auth_provider_x509_cert_url:string;
  client_x509_cert_url:string;
  universe_domain:string;
}

export function getServiceAccountCredentials():serviceAccountCredentials{
  try{
    return JSON.parse( fs.readFileSync(process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS||'', 'utf8'))
  }catch(error){
    throw new Error('no private key handling');
  }
}
export function getServicesAuthScopes():string[]{
  try{
    return [...process.env.GOOGLE_SERVICE_AUTH_SCOPES?.split(',')||[]]
  }catch(error){
    throw new Error('service scope settings error');
  }
}