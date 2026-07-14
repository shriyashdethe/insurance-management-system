package com.sawai.insurance.config;

import java.io.IOException;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class AuthInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request,
                             HttpServletResponse response,
                             Object handler) throws IOException {

        String token = request.getHeader("X-Auth-Token");

        // Check if token is missing
        if (token == null || token.isEmpty()) {
            response.setStatus(HttpStatus.UNAUTHORIZED.value());
            response.getWriter().write("401 Unauthorized - Missing X-Auth-Token");
            return false;
        }

        // Check if token is valid
        if (!token.equals(AuthConstants.ADMIN_TOKEN)
                && !token.equals(AuthConstants.AGENT_TOKEN)) {

            response.setStatus(HttpStatus.UNAUTHORIZED.value());
            response.getWriter().write("401 Unauthorized - Invalid Token");
            return false;
        }

        // Only ADMIN can DELETE
        if (request.getMethod().equalsIgnoreCase("DELETE")
                && token.equals(AuthConstants.AGENT_TOKEN)) {

            response.setStatus(HttpStatus.FORBIDDEN.value());
            response.getWriter().write("403 Forbidden - Agent cannot delete records");
            return false;
        }

        return true;
    }
}