# Lumen

![img](image/Lumen/1652411851095.png)

#### Install

Install Composer[Composer (getcomposer.org)](https://getcomposer.org/)

Create Project 8.0.17

```console
> composer create-project --prefer-dist laravel/lumen applumen
```



#### Config .env

`.env`

```env
DB_DATABASE=applumen
DB_USERNAME=root
DB_PASSWORD=
```

    Start server

```console
> php -S localhost:8000 -t public
```



#### Create migration

```console
> php artisan make:migration create_users_table
// Table name add 's'
```

go to `./api/database/migrations/{date}_create_users_table.php`

```php
public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('email');
            $table->string('github');
            $table->string('twitter');
            $table->string('location');
            $table->string('latest_article_published');
            $table->timestamps();
      });
```

    Start**MySQL** server and run migrate

```console
> php artisan migrate
```



#### Create model

go to `./app/Models`  and Create Model for connect Database(MySQL) file ex. `./app/Models/Users.php`  * file name first Character Uppercase

```php
    protected $fillable = [
	'name', 
	'email', 
	'github', 
	'twitter', 
	'location', 
	'latest_article_published'
    ];

```



#### Routes

`./routes/web.php`

Available Router Methods `./routes/web.php`

```php
$router->get($uri, $callback);
$router->post($uri, $callback);
$router->put($uri, $callback);
$router->patch($uri, $callback);
$router->delete($uri, $callback);
$router->options($uri, $callback);
```

Ex.1 `./routes/web.php`

```php
$router->get('/key', function () {
    $pool = '0123456789abcdefghijklmnoKLMNOPQRSTUVWXYZ';
    return  $pool;
});
```

Ex.2 `./routes/web.php`

```php
$router->get('posts/{postId}/comments/{commentId}', function ($postId, $commentId) {
    //
});
```

Ex.3 `./routes/web.php`

```php
$router->get('user/{name:[A-Za-z]+}', function ($name) {
    //
});\
```

Start server

```console
> php -S localhost:8000 -t public
```

 go to http://localhost:8000

##### Name Route

Ex.1 `./routes/web.php`

```php
$router->get('profile', ['as' => 'profile', function () {
	//
}]);
// Use $url = route('profile');
```

Ex.2 `./routes/web.php`

```php
$router->get('profile', [
    'as' => 'profile', 'uses' => 'UserController@showProfile'
]);
// Use  $url = route('profile', ['id' => 1]);
```

##### Middleware

Ex.1 `./routes/web.php`

```php
$router->group(['middleware' => 'auth'], function () use ($router) {
    $router->get('/', function () {
        // Uses Auth Middleware
    });

    $router->get('user/profile', function () {
        // Uses Auth Middleware
    });
});
```

##### Namespaces

`./routes/web.php./route`

```php
$router->group(['namespace' => 'Admin'], function() use ($router)
{
    // Using The "App\Http\Controllers\Admin" Namespace...

    $router->group(['namespace' => 'User'], function() use ($router) {
        // Using The "App\Http\Controllers\Admin\User" Namespace...
    });
});
```

##### Prefixe

Ex.1 `./routes/web.php`

```php
$router->group(['prefix' => 'admin'], function () use ($router) {
    $router->get('users', function () {
        // Matches The "/admin/users" URL
    });
});
```

Ex.2 `./routes/web.php`

```php
$router->group(['prefix' => 'accounts/{accountId}'], function () use ($router) {
    $router->get('detail', function ($accountId) {
        // Matches The "/accounts/{accountId}/detail" URL
    });
});
```

##### Responseres

###### json data

 `./routes/web.php`

```php
$router->get('/users', function () {
    // arry
    $array  = ["a", "b", "c"];
    // array obj
    $arrayobj = ["a" => 1, "b" => 2, "c" => 3];
    // response json
 
    return response()->json([
        // json formay
        'status' => 'error',
        'StatusCode' => '404',
        // array format
        'array' => $array,
        // array OBJ format
        'arrayOBJ' => $arrayobj
    ]);
});

```

###### Param

`./routes/web.php./route `

```php
$router->get('users/db', function () {

    $results = app('db')->select("SELECT * FROM users");
    return response()->json($results);

});

```

```php
$router->get('/users/{id}', function ($id) {
    return  "user ID:" . $id;
});
 
$router->get('/users/{id}/{name}', function ($id, $name) {
    return  "ID: " . $id . "<br> Name: " . $name;
});

```

###### Get data in database

`./routes/web.php./route`

```php
$router->get('users/db', function () {

    $results = app('db')->select("SELECT * FROM users");
    return response()->json($results);

});

```

###### Call Controller

`./routes/web.php./route`

```php
$router->get('/users', 'UsersController@Users');
// go to UsersController and Use functions Users

$router->get('/user/{id}', 'UsersController@UserID');
// go to UsersController and Use functions UserID
```



#### Middleware

Ex.1 `./app/Http/Middleware`

```php
<?php

namespace App\Http\Middleware;

use Closure;

class BeforeMiddleware
{

    public function handle($request, Closure $next)
    {
        if ($request->input('age') <= 200) {
            return redirect('home');
        }

        return $next($request);
    }

}
```

##### Registering

`./bootstrap/app.php`

```php
$app->routeMiddleware([
    'auth' => App\Http\Middleware\Authenticate::class,
]);
```

##### Route

single middlewere `./routes/web.php`

```php
$router->get('admin/profile', ['middleware' => 'auth', function () {
    //
}]);
```

multiple middlewere `./routes/web.php`

```php
$router->get('/', ['middleware' => ['first', 'second'], function () {
    //
}]);
```

middlewere and controller `./routes/web.php`

```php
$router->get('admin/profile', [
    'middleware' => 'auth',
    'uses' => 'AdminController@showProfile'
]);
```

##### Ex Manage Role

register middleware `./bootstrap/app.php`

```php
$app->routeMiddleware([
    'auth' => App\Http\Middleware\Authenticate::class,
    'role' => \App\Http\Middleware\Role::class,
]);
```

config middleware `./app/Http/Middleware`

```php
<?php
namespace App\Http\Middleware;
use Closure;
class RoleMiddleware
{

    public function handle($request, Closure $next)
    {
    if (!Auth::check())
        return redirect('login');

    if (Auth::user()->role == 0) { 
     	return $next($request);
    }
     abort(403, "Cannot access to restricted page");
    }

}
```

route  `./routes/web.php`

```php
Route::get('admin', 'AdminController@edit')->middleware('role:admin');
```



##### CROS

`./app/Http/Middleware`

```php
class CorsMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

        $headers = [
            'Access-Control-Allow-Origin'      => 'http://localhost:3000',
            'Access-Control-Allow-Methods'     => 'POST, GET, OPTIONS, PUT, DELETE',
            'Access-Control-Allow-Credentials' => 'true',
            'Access-Control-Max-Age'           => '86400',
            'Access-Control-Allow-Headers'     => '*'
        ];

        if ($request->isMethod('OPTIONS')) {
            return response()->json('{"method":"OPTIONS"}', 200, $headers);
        }

        $response = $next($request);
        foreach ($headers as $key => $value) {
            $response->header($key, $value);
        }

        return $response;
    }
}
```



#### Controller

`./app/Http/Controllers`

##### Select Data in database

*import model

`./app/Http/Controllers/UsersController.php `

###### Request

```php
use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function Users(Request $request)
    {
	$request->usersname;
        $request->password;
        return response()->json($Users);
    }
}
```

###### Select all

```php
use App\Models\Users;

class UsersController extends Controller
{
    public function Users()
    {
        $Users = Users::all();
        return response()->json($Users);
    }
}
```

###### Select Where

```php
use App\Models\Users;

class UsersController extends Controller
{
    public function Users($id)
    {
        $data = Users::where([['id', '=', $id]])->get();;
        return response()->json($data);
    }
}
```

###### Insert

Model and Request

```php
use App\Models\Users;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function Users(Request $request)
    {
        $Users = new Users;
        $Users->usersname = $request->usersname;
        $Users->role = $request->role;
        $Users->status = $request->status;
        $Users->save();
        return response()->json($Users);
    }
}
```

DB and Request

```php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UsersController extends Controller
{
    public function Users(Request $request)
    {
         DB::table('users')->insert(
            [
                'id' => null,
                'usersname' =>  $request->usersname,
                'role' => $request->role,
                'status' => $request->status,
                'created_at' => date("Y-m-d H:i:s"),
                'updated_at' => date("Y-m-d H:i:s")
            ]
        );
    }
}
```

###### Update

```php
use App\Models\Users;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function Users(Request $request)
    {
        Users::where([
            ['id', '=', $request->id]
        ])->update([
            'usersname' => $request->usersname,
            'password' => md5($request->password)
        ]);
    }
}
```

###### Delete

```php
use App\Models\Users;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function Users(Request $request)
    {
        Users::where([
            ['id', '=', $request->id]
        ])->delete();
    }
}
```

```php
use App\Models\Users;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function Users(Request $request)
    {
        Users::withTrashed()
                ->where('id', 1)
                ->get();

	Users::onlyTrashed()
                ->where('id', 1)
                ->get();
    }
}
```



#### Responses

###### simple

```php
 return 'Hello World';

 return [1, 2, 3];

 return $user;
 
```

###### Header

```php
 return response('Hello World', 200)->header('Content-Type', 'text/plain');

 return response($content)
            ->header('Content-Type', $type)
            ->header('X-Header-One', 'Header Value')
            ->header('X-Header-Two', 'Header Value');

 return response($content)
            ->withHeaders([
                'Content-Type' => $type,
                'X-Header-One' => 'Header Value',
                'X-Header-Two' => 'Header Value',
            ]);
```

###### Cookie

```php
 return response('Hello World')->cookie('name', 'value', $minutes);

 return response('Hello World')->cookie('name', 'value', $minutes, $path, $domain, $secure, $httpOnly);
```

###### redirect page

```php
 return redirect('home/dashboard');

 return redirect()->route('login');
 return redirect()->route('profile', ['id' => 1]);
 return redirect()->route('profile', [$user]);
```

###### redirect controller

```php
 use App\Http\Controllers\UserController;
 
 return redirect()->action([UserController::class, 'index']);

 return redirect()->action(
    [UserController::class, 'profile'], ['id' => 1]
 );
```

###### redirect website

```php
 return redirect()->away('https://www.google.com');
```

###### redirect with status

```php
 return redirect('dashboard')->with('200', 'Profile updated!');
```

###### json

```php
 return response()->json([
    'name' => 'Abigail',
    'state' => 'CA',
 ]);
```

###### download

```php
 return response()->download($pathToFile);
 return response()->download($pathToFile, $name, $headers);
```

###### file

```php
 return response()->file($pathToFile);
 
 return response()->file($pathToFile, $headers);
```

###### other

```php
 return response()
            ->view('hello', $data, 200)
            ->header('Content-Type', $type);
```



#### Cookie

```php
 use Illuminate\Support\Facades\Cookie;
```

Set cookie

```php
 Cookie::queue('name', 'value', $minutes);

 $cookie = cookie('name', 'value', $minutes);
 return response('Hello World')->cookie($cookie);
```

Unset cookie

```php
 Cookie::expire('name');
 return response('Hello World')->withoutCookie('name');
```




---
