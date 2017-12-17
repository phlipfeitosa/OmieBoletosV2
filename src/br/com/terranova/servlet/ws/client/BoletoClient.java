package br.com.terranova.servlet.ws.client;

import br.com.terranova.servlet.ws.*;

public class BoletoClient {
  public String execute(String boletoListarRequest) {
    StringEntity boletoListarRequestSE = new StringEntity(boletoListarRequest);
    boletoListarRequestSE.setContentType("application/json");

    HttpPost httpPost = new HttpPost("http://app.omie.com.br/api/v1/financas/boleto/");
    httpPost.setEntity(boletoListarRequestSE);
    HttpResponse httpResponse = new DefaultHttpClient().execute(httpPost);

    if(httpResponse.getStatusLine().getStatusCode() == 201)
      return;

    BufferedReader br = new BufferedReader(new InputStreamReader(httpResponse.getEntity().getContent()));
    String output;
    String returnString;
    while((output = br.readLine()) != null)
      returnString += output;

    return returnString;

  }

}
