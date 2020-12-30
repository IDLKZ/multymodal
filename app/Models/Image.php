<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class Image extends Model
{
    use HasFactory;



    public static function createFile($request,$name,$str=null,$update = null){
        $filename = null;
        if($update){(new self())->deleteFile($update);}
        if($request->hasFile($name)){
            $file = $request->file($name);
            $directory = "/assets/uploads/";
            $str = $str !=null ? Str::slug($str).Str::random(5) : Str::random(15);
            $filename = $str . ".".$file->extension();
            $file->storeAs($directory,$filename);
            $filename = $directory . $filename;
        }
        return $filename;
    }

    public function deleteFile($filename){
        if(Storage::disk('local')->exists($filename)){
            Storage::disk("local")->delete($filename);
        }
    }



}
