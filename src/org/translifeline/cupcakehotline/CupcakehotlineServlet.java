package org.translifeline.cupcakehotline;

import java.io.IOException;
import javax.servlet.http.*;

@SuppressWarnings("serial")
public class CupcakehotlineServlet extends HttpServlet {
	public void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws IOException {
		resp.setContentType("text/plain");
		resp.getWriter().println(req.toString());
	}
	@Override
	public void init(){
		//Register Objectify entities here
	}
}
