<?php

use App\Http\Controllers\FrontendController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;


Route::get("/",[FrontendController::class,"index"]);
//Route::get("/login",[FrontendController::class,"login"])->name("login");
//Route::get("/logout",[FrontendController::class,"logout"])->name("logout");
//Route::post("/auth",[FrontendController::class,"auth"])->name("auth");

Route::group(["middleware"=>"admin","prefix"=>"admin"],function (){
   Route::get("/",[AdminController::class,"index"]);
});

Auth::routes(["register"=>false]);

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


Route::resource('seos', App\Http\Controllers\SeoController::class);

Route::resource('headers', App\Http\Controllers\HeaderController::class);

Route::resource('headings', App\Http\Controllers\HeadingController::class);

Route::resource('parallaxes', App\Http\Controllers\ParallaxController::class);


Route::resource('directions', App\Http\Controllers\DirectionController::class);

Route::resource('managers', App\Http\Controllers\ManagerController::class);

Route::resource('partners', App\Http\Controllers\PartnerController::class);

Route::resource('documents', App\Http\Controllers\DocumentController::class);

Route::resource('addresses', App\Http\Controllers\AddressController::class);

Route::resource('phones', App\Http\Controllers\PhoneController::class);

Route::resource('times', App\Http\Controllers\TimeController::class);

Route::resource('emails', App\Http\Controllers\EmailController::class);