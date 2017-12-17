package br.com.terranova.servlet.ws;

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

  }

}
