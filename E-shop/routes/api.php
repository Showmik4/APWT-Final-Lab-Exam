<?php
use Illuminate\Http\Request;
//use App\Models\student;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//Route::post('/add-student',[StudentController::class,'store']);
Route::get('/students', 'StudentController@index');
Route::post('/add-student', 'StudentController@store');
Route::get('/edit-student/{id}', 'StudentController@edit');
Route::put('/update-student/{id}', 'StudentController@update');
Route::delete('/delete-student/{id}', 'StudentController@destroy');
Route::get('/student_details/{id}', 'StudentController@show');
Route::get('/Search/{name}', 'StudentController@search');
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
