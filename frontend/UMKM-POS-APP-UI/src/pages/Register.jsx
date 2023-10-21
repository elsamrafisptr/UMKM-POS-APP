export default function Register() {
    return (
        <>
            <div class="text-center mb-4">
                <h2 class="text-2xl md:text-3xl font-semibold text-gray-800">SiKasir</h2>
            </div>
            <form>
                <div class="mb-4">
                    <label for="username" class="block text-sm font-medium text-gray-600 mb-2">Username</label>
                    <input type="text" id="username" name="username" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="Your username" required/>
                </div>
                <div class="mb-6">
                    <label for="password" class="block text-sm font-medium text-gray-600 mb-2">Password</label>
                    <input type="password" id="password" name="password" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="Your password" required/>
                </div>
                <button type="submit" class="w-full bg-blue-500 text-white text-sm font-semibold py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:bg-blue-600">Login</button>
            </form>
            <div class="mt-4 text-center">
                <a href="#" class="text-blue-500 hover:underline">Forgot Password?</a>
            </div>
            <div class="mt-6 text-center">
                <p class="text-gray-600">Or, login with:</p>
                <div class="mt-3 space-x-4">
                    
                    <button class="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700">Google</button>
                
                    <button class="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">Facebook</button>
                    
                    <button class="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800">Apple</button>
                </div>
            </div>
        </>
    )
}