package com.flinkinfo.demo.controller;

import com.alibaba.fastjson.annotation.JSONField;
import org.hibernate.validator.constraints.NotBlank;

import javax.validation.constraints.NotNull;
import java.io.Serializable;

public class TestForm implements Serializable
{

    @NotBlank
    @JSONField(name = "userName")
    private String name;

    @NotNull
    @JSONField(name = "age")
    private int age;

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
