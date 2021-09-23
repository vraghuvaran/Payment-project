package com.dbs.payment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.dbs.payment.filter.JWTRequestFilter;
import com.dbs.payment.service.UserDetailService;

@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Autowired
	private UserDetailService userdetailsservice;
	
	@Autowired
	private JWTRequestFilter jwtrequestfilter;
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		// TODO Auto-generated method stub
		
		auth.userDetailsService(userdetailsservice);
		
	}
	
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		// TODO Auto-generated method stub
//		http.csrf().disable().authorizeRequests().
//		antMatchers(HttpMethod.GET,"/","/product/**","/register","/customers/**").permitAll()
//		.antMatchers(HttpMethod.PATCH,"/customers").permitAll()
//		.antMatchers(HttpMethod.GET,"/bank","/bank/**").permitAll()
//		.antMatchers(HttpMethod.GET,"/message").permitAll()
//		.antMatchers(HttpMethod.POST,"/transaction").permitAll()
//		.antMatchers(HttpMethod.GET,"/transaction","/transaction/**").permitAll()
//		.anyRequest().authenticated().and().formLogin().and().logout();
		http.cors();
		http.csrf().disable().authorizeRequests()
		.antMatchers(HttpMethod.POST,"/authenticate").permitAll()
		.anyRequest().authenticated()
		.and().sessionManagement()
		.sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		   
		   http.addFilterBefore(jwtrequestfilter, UsernamePasswordAuthenticationFilter.class);

	}
	
	
	
	@Override
	public void configure(WebSecurity web) throws Exception {
		// TODO Auto-generated method stub
		web.ignoring().antMatchers("/h2-console/**");
	}
	
	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}
	
	
	@Bean
	public PasswordEncoder getPasswordEncoded() {
		return NoOpPasswordEncoder.getInstance();
	}

}
