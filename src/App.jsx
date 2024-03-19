import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-100 py-6 sm:py-12">
      {/* <img src="src\img\fondo.png" alt="" class="absolute bottom-1 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1010" /> */} 
      <div class="relative px-5 pt-5 pb-8 bg-fondo bg-cover shadow-xl items-center ring-1 ring-gray-900/5 sm:mx-auto sm:rounded-lg sm:px-5 w-594 h-288 justify-center">
        <div class="flex">
          <div class=" divide-gray-300/50">
            <header class="pt-2 text-base leading-7 text-purple-dark">
              <p class="font-nunito text-2xl font-bold ">!Bienvenido de vuelta,<p class="text-3-2xl">Jose Armando Suarez!</p></p>
            </header>
              <p class=" py-8 font-nunito text-sm font-medium">¡Has recibido 9 reservas nuevas! Mira todos los detalles de las compras de tus clientes ya mismo</p>
            <footer>
              <button type="button" class="p-3 w-219 text-lg font-semibold text-white bg-violet-blue hover:bg-purple-800 focus:ring-4 focus:ring-blue-300 rounded-lg">¡Vamos allá!</button>
            </footer>
          </div>
          <img class="w-222 h-314 relative bottom-16 left-3" src="src\img\perrito.png" alt="" />
        </div>
      </div>
      <div class=" bg-white px-5 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:rounded-lg sm:px-5 my-7 w-594">
        <header class="flex justify-between">
          <p class="text-lg font-bold">Facturación</p>
          <div class="flex gap-5">
            <select class="flex w-20 h-9 py-1 pr-2.5 pl-3 justify-center items-center gap-2 rounded-lg border border-gray-400 bg-gray-100">
                <option value="">Año</option>
                <option value="">Mes</option>
            </select>
            <select class="flex w-20 h-9 py-1 pr-2.5 pl-3 justify-center items-center gap-2 rounded-lg border border-gray-400 bg-gray-100">
                <option value="">2023</option>
            </select>
          </div>
        </header>
        <div class=" bg-violet-600 px-5 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:rounded-lg sm:px-5 my-7 w-550 h-250 text-center">
          <p>Gráfico aquí</p>
        </div>
        <footer class="flex justify-between">
          <div class="flex justify-between w-219">
            <div>
              <p class="flex font-bold text-2xl justify-between">1321<img src='src\img\arrow_up.png' class="h-8"></img></p>
              <p class="text-violet-blue text-sm">S/ +36.8% <p class="text-xs text-gray-400">que el año pasado</p></p>
            </div>
            <div>
              <p class="flex font-bold text-2xl justify-between">648<img src='src\img\arrow_down.png' class="h-8"></img></p>
              <p class="text-red-600 text-sm">-360 órdenes <p class="text-xs text-gray-400">que el año pasado</p></p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
