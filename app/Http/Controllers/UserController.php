<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\User as UserResource;
Use App\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserController extends Controller{
    public function __construct(User $user){
        $this->user = $user;
    }
    /**
     * Muestra la lista de usuarios en sistema
     * @return Json api rest
     */
    public function index(Request $request){
        $page = $request->itemsPage ? $request->itemsPage : 50;

        $users = $this->user->paginate($page);
        return UserResource::collection($users);
    }
    /**
     * Registra un nuevo usuario en la base de datos.
     * @param  $request que se traen de post body json
     * @return Json api rest
     */
    public function store(Request $request){
        $credenciales = $this->validate(request(),[
            'email' => 'email|required|string',
            'password' => 'required|string',
            'name' => 'required|string'
        ]);

        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password'))
        ]);
        return New UserResource($user);
    }
    /**
     * Muestra unj usuario espesifico
     * @param  int  $id
     * @return Json api rest
     */
    public function show(User $user){
        return New UserResource($user);
    }
    /**
     * Actualiza el registro de un susuario
     * @param  $request que se traen del body json
     * @param  int  $id
     * @return Json api rest
     */
    public function update(Request $request, User $user){
        if($request['password']) $request['password'] = Hash::make($request->input('password'));
        $user->update( $request->all() );
        return New UserResource($user);
    }
    /**
     * Elimina un usuario en espesifico.
     * @param  int  $id
     * @return Json api rest
     */
    public function destroy(User $user){
        $user->delete();
        return response()->json(null, 204);
    }
    public function login(){
        $credenciales = $this->validate(request(),[
            'email' => 'email|required|string',
            'password' => 'required|string'
        ]);
        $user = $this->user
            ->UserEmail($credenciales['email'])
            ->first();
            
        if($user && Hash::check($credenciales['password'],$user->password)){
            $user->api_token = hash('sha256', Str::random(60));
            $user->save();

            $respons['data'] = $user;
            $respons['data']['token'] = $user->api_token;
            return response()->json($respons, 200);
        } else {
            $respons['errors'] = $user && $user->id ? "La contrasena es incorrecta" : "Las credenciales del usuario no son correctas";
            $respons['errnum'] = $user && $user->id ? $user->id : 0;
            return response()->json($respons, 401);
        }
    }
    public function logout(){
        $user = $this->user;
        $user->api_token = null;
        $user->save();
        return response()->json(['message' => 'Ha salido del sistema correctamente'], 200);
    }
}
