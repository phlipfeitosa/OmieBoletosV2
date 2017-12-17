package br.com.terranova.servlet.ws;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import br.com.terranova.servlet.ws.client.BoletoClient;

public class BoletoServlet extends HttpServlet {
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    this.execute(request, response);

  }

  public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    this.execute(request, response);

  }

  public void execute(HttpServletRequest request, HttpServletResponse response) {
    response.setContentType("application/json");
    String boletoListarRequest = request.getParameter("BoletoListarRequest");

    BoletoClient boletoClient = new BoletoClient();
    String boletoListarResponse = boletoClient.execute(boletoListarRequest);

    PrintWriter out = response.getWriter();
    out.print(boletoListarResponse);

  }

}
