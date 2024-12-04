import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios"; // Ensure axios is imported

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    organizationId: "", // This field is still organizationId
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5001/api/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        organizationId: formData.organizationId,
      });
      console.log(response.data);
      navigate("/");
    } catch (error) {
      if (error.response) {
        console.error("Error response:", error.response.data);
      } else {
        console.error("Error message:", error.message);
      }
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center px-4 opacity-90"
      style={{ paddingTop: "6rem", paddingBottom: "6rem" }}
    >
      <Card
        className="w-full sm:w-2/6 max-h-[600px]"
        style={{
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
      >
        <CardHeader className="pt-4 px-6 space-y-2">
          <CardTitle className="text-4xl mb-2">Create an account</CardTitle>
          <CardDescription>
            Enter your details below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow p-6 grid gap-4 overflow-auto">
          {["name", "organizationId", "email", "password"].map((field) => (
            <div className="grid gap-2" key={field}>
              <Label htmlFor={field}>
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </Label>
              <Input
                id={field}
                type={field === "password" ? "password" : "text"}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={formData[field]}
                onChange={handleInputChange}
              />
              {errors[field] && (
                <p className="text-red-500 text-sm">{errors[field]}</p>
              )}
            </div>
          ))}
        </CardContent>
        <CardFooter className="w-full flex flex-col gap-2">
          <Button
            className="w-full bg-gradient-to-r from-green-400 to-violet-300 text-white hover:from-green-500 hover:to-violet-400"
            onClick={handleRegister}
          >
            Register
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
