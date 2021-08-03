<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\student;

class StudentController extends Controller
{
    //
    public function index(){
        try{
          $students= student::all();
          return response([
             'status'=>200,
              'student'=>$students,
             'message'=>'success',
    
          ]);
      }catch(Exception $ex){
          return response([
              'message'=>$ex->getmessage()
          ]);
      }
      }
        //
       /* public function store(Request $request){
            $student=new Student;
           
            $student->save();
    
            return response()->json([
              'status'=>200,
              'message'=>'student added successfully',
            ]);
        }*/
        public function store(Request $request){
          try{
              $student=new student();
              $student->name=$request->name;
              $student->course=$request->course;
             
              $student->phone=$request->phone;
              $student->save();
              return response([
                'message'=> 'student created',
                'status'=>200,
                'student'=>$student,
              ]);
          }
    
          catch(Exception $ex){
             return response([
                 'message'=>$ex->getmessage()
             ]);
         }
         
     }

     public function edit($id){
      $student= student::find($id);
     
  
      return response([
           'status'=>200,
          'student'=>$student,
          
        ]);
     }

     public function update(Request $request,$id){
      try{
          $student= student::find($id);
          $student->name=$request->name;
          $student->course=$request->course;
          $student->phone=$request->phone;
          $student->update();
          return response([
            'status'=>200,
            'message'=> 'student updated',
            'student'=>$student,
          ]);
      }

      catch(Throwable $th){
         return response([
             'message'=>$th->getmessage()
         ]);
     }
     
 }

 public function destroy($id){
  try{
  $student= student::find($id);
  $student->delete();

  return response([
    'status'=>200,
      'message'=> 'student deleted',
      
    ]);
  
}

catch(Throwable $th){
  return response([
      'message'=>$th->getmessage()
  ]);


}

 }

 public function show(student $student, $id)
   {
       //$product = DB::table('products')->where('product_id', $id)->first();
      
       //return dd();
       try{
        $student =student::find($id);
    
        return response([
            'student'=>$student,
            'status'=>200,
            'message'=> 'dipo deleted',
            
          ]);
        
      }
    
      catch(Throwable $th){
        return response([
            'message'=>$th->getmessage()
        ]);
      
   
     
  }

}

public function search($name){



return student::where("name","LIKE","%".$name."%")->get();
}
}