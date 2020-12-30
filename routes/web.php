<?php

use App\Http\Controllers\FrontendController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;


Route::get("/",[FrontendController::class,"index"]);
Route::get("/login",function (){return view("login");})->middleware("guest");
Route::get("/logout",function (){auth()->logout();})->middleware("guest");
Route::post("/auth",[FrontendController::class,"auth"])->name("auth");

Route::group(["middleware"=>"admin","prefix"=>"admin"],function (){
   Route::get("/",[AdminController::class,"index"]);
});
