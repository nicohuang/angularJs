package com.flinkinfo.demo.domain;

import com.alibaba.fastjson.annotation.JSONField;

import java.io.Serializable;

/**
 * Created by nico on 16/3/14.
 */
public class User implements Serializable
{
    @JSONField(name = "id")
    private String id;

    @JSONField(name = "name")
    private String name;

    @JSONField(name = "age")
    private int age;

    public User()
    {

    }

    public User(String id, String name, int age)
    {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    public String getId()
    {
        return id;
    }

    public void setId(String id)
    {
        this.id = id;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public int getAge()
    {
        return age;
    }

    public void setAge(int age)
    {
        this.age = age;
    }
}
