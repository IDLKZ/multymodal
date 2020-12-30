<?php

use App\Http\Controllers\FrontendController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;


Route::get("/",[FrontendController::class,"index"]);
Route::get("/login",function (){return view("login");});
Route::get("/logout",function (){auth()->logout(); dd(auth()->check());});
Route::post("/auth",[FrontendController::class,"auth"])->name("auth");

Route::group(["middleware"=>"admin","prefix"=>"admin"],function (){
   Route::get("/",[AdminController::class,"index"]);
});
