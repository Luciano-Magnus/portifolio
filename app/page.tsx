import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Code2, Database, Server, Braces, ChevronDown, Heart } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-md bg-gray-950/80 border-b border-gray-800">
        <div className="max-w-3xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mr-3">
              <span className="font-bold text-white">L</span>
            </div>
            <h1 className="text-xl font-bold text-white">Luciano</h1>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link
              href="#tecnologias"
              className="text-gray-300 hover:text-blue-400 transition-colors text-sm uppercase tracking-wider"
            >
              Tecnologias
            </Link>
            <Link
              href="#sobre"
              className="text-gray-300 hover:text-blue-400 transition-colors text-sm uppercase tracking-wider"
            >
              Sobre
            </Link>
            <Link
              href="#contato"
              className="text-gray-300 hover:text-blue-400 transition-colors text-sm uppercase tracking-wider"
            >
              Contato
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 max-w-3xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-6">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight text-center md:text-left">
                Transformando ideias em{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  código
                </span>{" "}
                há 5 anos
              </h2>
              <p className="text-lg text-gray-400 text-center md:text-left">
                Especialista em Flutter, .NET, PostgreSQL e Golang.
              </p>
              <Link href="https://www.linkedin.com/in/luciano-magnus?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank">
                <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-md transition-all duration-300 transform hover:scale-105">
                  <Linkedin className="mr-2 h-5 w-5" />
                  Conecte-se no LinkedIn
                </Button>
              </Link>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <div className="absolute inset-1 bg-gray-900 rounded-full flex items-center justify-center">
                  <Image
                    src="/avatar.png?height=300&width=300"
                    alt="Luciano"
                    width={300}
                    height={300}
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-16">
            <Link href="#tecnologias" className="animate-bounce">
              <ChevronDown className="h-8 w-8 text-gray-400" />
            </Link>
          </div>
        </section>

        {/* Technologies Section */}
        <section id="tecnologias" className="py-20 bg-gray-900 scroll-mt-16">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Tecnologias{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                & Ferramentas
              </span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                <div className="h-16 w-16 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Code2 className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold">Flutter</h3>
                <p className="text-sm text-gray-400 text-center">Desenvolvimento mobile multiplataforma</p>
              </div>
              <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                <div className="h-16 w-16 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Server className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold">.NET</h3>
                <p className="text-sm text-gray-400 text-center">Desenvolvimento backend robusto</p>
              </div>
              <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                <div className="h-16 w-16 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Database className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold">PostgreSQL</h3>
                <p className="text-sm text-gray-400 text-center">Banco de dados relacional</p>
              </div>
              <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                <div className="h-16 w-16 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <Braces className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold">Golang</h3>
                <p className="text-sm text-gray-400 text-center">Desenvolvimento de alta performance</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-12">
              <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 px-4 py-2 text-sm">Flutter</Badge>
              <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 px-4 py-2 text-sm">.NET</Badge>
              <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 px-4 py-2 text-sm">PostgreSQL</Badge>
              <Badge className="bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 px-4 py-2 text-sm">Golang</Badge>
              <Badge className="bg-gray-700/50 text-gray-300 hover:bg-gray-700 px-4 py-2 text-sm">C#</Badge>
              <Badge className="bg-gray-700/50 text-gray-300 hover:bg-gray-700 px-4 py-2 text-sm">Dart</Badge>
              <Badge className="bg-gray-700/50 text-gray-300 hover:bg-gray-700 px-4 py-2 text-sm">SQL</Badge>
              <Badge className="bg-gray-700/50 text-gray-300 hover:bg-gray-700 px-4 py-2 text-sm">Git</Badge>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="sobre" className="py-20 max-w-3xl mx-auto px-4 scroll-mt-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Sobre{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Mim</span>
            </h2>
            <div className="bg-gray-800/50 rounded-xl p-8 shadow-lg">
              <p className="text-lg text-gray-300 mb-6">
                Sou um desenvolvedor de software com 5 anos de experiência, formado em Análise e Desenvolvimento de
                Sistemas desde 2021. Tenho paixão por criar soluções eficientes e elegantes para problemas complexos,
                sempre buscando unir técnica e criatividade.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-blue-500/20 flex-shrink-0 flex items-center justify-center mt-1">
                    <span className="text-blue-400 font-bold">🥋</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">Faixa Preta de Taekwondo</h3>
                    <p className="text-gray-400">
                      Praticante desde jovem, conquistei a faixa preta em 2022. O Taekwondo me ensinou disciplina,
                      perseverança e foco - habilidades que aplico diariamente no desenvolvimento de software.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-blue-500/20 flex-shrink-0 flex items-center justify-center mt-1">
                    <span className="text-blue-400 font-bold">⚽</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">Apaixonado por Esportes</h3>
                    <p className="text-gray-400">
                      Grande entusiasta de futebol e outros esportes. Acredito que a prática esportiva contribui para um
                      melhor equilíbrio entre vida pessoal e profissional.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-blue-500/20 flex-shrink-0 flex items-center justify-center mt-1">
                    <span className="text-blue-400 font-bold">🎮</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">Gamer Tático</h3>
                    <p className="text-gray-400">
                      Fã de jogos que exigem estratégia e trabalho em equipe, especialmente Rainbow Six Siege. Os jogos
                      táticos me ajudam a desenvolver habilidades de resolução de problemas e pensamento crítico.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-blue-500/20 flex-shrink-0 flex items-center justify-center mt-1">
                    <span className="text-blue-400 font-bold">💡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">Aprendizado Contínuo</h3>
                    <p className="text-gray-400">
                      Sempre em busca de novos conhecimentos e desafios. Dedico tempo para projetos pessoais que me
                      permitem explorar novas tecnologias e aprimorar minhas habilidades.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 scroll-mt-16" id="contato">
        <div className="max-w-3xl mx-auto px-4 flex flex-col items-center gap-4">
          <Link href="https://www.linkedin.com/in/luciano-magnus?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
            <Button variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-600/10">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
          </Link>
          <Link
            href="https://github.com/Luciano-Magnus"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors mt-2"
          >
            <Github className="h-6 w-6" />
          </Link>
          <p className="text-gray-400 text-sm mt-4">
            Feito com <Heart className="inline h-4 w-4 text-red-500 mx-1" /> e muito código por Luciano
          </p>
        </div>
      </footer>
    </div>
  )
}
