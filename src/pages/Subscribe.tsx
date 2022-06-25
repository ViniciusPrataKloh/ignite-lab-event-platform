import { Logo } from "../components/logo/Logo";



export function Subscribe() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-blur bg-cover bg-no-repeat">
            <div className="flex items-center justify-between gap-8 max-w-[1100] mt-20 mx-auto">
                <div className="max-w-[640px]">
                    <Logo />
                    <h1 className="mt-8 text-[2.5rem] leading-tight">
                        Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React JS</strong>
                    </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed">
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>

                </div>

                <div className="p-8 bg-gray-700 border border-gray-500 rounded" >
                    <strong className="text-2xl mb-6 block">
                        Inscreva-se gratuitamente
                    </strong>

                    <form
                        action=""
                        className="flex flex-col gap-2 w-full"
                    >
                        <input
                            className="bg-gray-900 rounded px-5 h-14"
                            type="text"
                            placeholder="Seu nome completo"
                        />
                        <input
                            className="bg-gray-900 rounded px-5 h-14"
                            type="email"
                            placeholder="Digite seu e-mail"
                        />
                        <button
                            className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors"
                            type="submit"
                        >
                            Garantir minha vaga
                        </button>
                    </form>
                </div>
            </div>

            <img
                className="mt-10"
                src="/src/assets/group.png"
                alt=""
            />
        </div>
    );
}