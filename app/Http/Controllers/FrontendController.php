<?php

namespace App\Http\Controllers;

use App\Models\Data;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FrontendController extends Controller
{
    public function index(){
        $data = Data::data();
        return view("index",compact("data"));
    }

    public function login(){
        return view("login");
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

    public function logout(){
        Auth::logout();
        return redirect(route("login"));
    }
}
