package com.flinkinfo.demo.controller;

import com.flinkinfo.demo.Response;
import com.flinkinfo.demo.domain.User;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 *
 */

@Controller
@RequestMapping("/user")
public class UserServlet
{
    @ResponseBody
    @RequestMapping(value = "/hello", method = RequestMethod.POST)
    public User hello(String userName, int age)
    {
        User user = new User("2",userName,age);
        System.out.println(userName + " " + age);

        return user;
    }

    @ResponseBody
    @RequestMapping(value = "/hello1", method = RequestMethod.POST)
    public Response read(@Valid @RequestBody TestForm form, BindingResult result) throws Exception
    {
        Response response = new Response();

        if (result.hasErrors())
        {
            response.setStatus(Response.STATUS_FAILURE);
            response.setErrorMessage("请求数据有误");
        }
        else
        {
            response.setStatus(Response.STATUS_SUCCESS);
            Map<String ,Object> map = new HashMap<String, Object>();
            User user = new User("2",form.getName(),form.getAge());
            System.out.println(form.getName() + " " + form.getAge());
            map.put("user",user);
            response.setContent(map);
        }

        return response;
    }

    @ResponseBody
    @RequestMapping("hello2")
    protected List<User> responseOutWithJson() {
        List<User> userList = new ArrayList<User>();
        User user =new User("1","man1",18);
        User user1 =new User("2","man1",19);
        User user2 =new User("3","man",18);
        User user3 =new User("4","man",13);
        userList.add(user);
        userList.add(user1);
        userList.add(user2);
        userList.add(user3);
        return userList;
    }

}
