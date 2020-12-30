<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FrontendController extends Controller
{
    public function index(){
        return view("index");
    }

    public function auth(Request $request){
        $this->validate($request,["email"=>"required|email","password"=>"required|min:4"]);
        if (auth()->attempt(["email"=>$request->get("email"),"password"=>$request->get("password")],$request->boolean("remember")))
        {
            return redirect("/admin");
        }
        else{
            return redirect()->back()->withErrors("Неправильный логин или пароль");
        }
    }
}
