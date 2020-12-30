<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Data extends Model
{
    use HasFactory;




    public static function data(){
        $data["parallax"] = Parallax::first();
        $data["headings"][1] = Heading::where("section",1)->first();
        $data["headings"][2] = Heading::where("section",2)->first();
        $data["headings"][3] = Heading::where("section",3)->first();
        $data["headings"][4] = Heading::where("section",4)->first();
        $data["headings"][5] = Heading::where("section",5)->first();
        $data["headings"][6] = Heading::where("section",6)->first();
        //null
        $data["headers"] = Header::all();
        //empty:{}
        $data["direction"] = Direction::get();
        $data["managers"] = Manager::get();
        $data["partners"] = Partner::get();
        $data["documents"] = Document::get();
        $data["address"] = Address::get();
        $data["phone"] = Phone::get();
        $data["time"] = Time::get();
        $data["email"] = Email::get();

        $data["seo"] = Seo::first();


        return $data;

    }
}
