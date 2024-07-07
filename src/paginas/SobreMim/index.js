import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import styles from "./SobreMim.module.css"
import fotoSobreMim from "assets/minha_foto.png"

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou Gustavo!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto minha"
                className={styles.fotoSobreMim}
            />
           <p>Oi, tudo bem? Eu sou estudante de Front-end na Alura e estou feliz de te ver por aqui.</p>

<p>Minha jornada na tecnologia começou de forma intensa e motivada, sempre buscando aprimorar minhas habilidades e adquirir novas experiências. Atualmente, estou cursando o 3º semestre de Análise e Desenvolvimento de Sistemas na Fatec Ipiranga, no período noturno. Em paralelo, estou me dedicando ao curso Oracle Next Education - ONE, que tem sido uma excelente oportunidade para expandir meus conhecimentos.</p>

<p>Na Fatec Ipiranga, tenho me aprofundado em diversas áreas da tecnologia, incluindo:</p>
<ul>
  <li>MySQL</li>
  <li>Linguagem Java</li>
  <li>Linguagem C</li>
  <li>Python</li>
</ul>

<p>Já no curso Oracle ONE, estou desenvolvendo habilidades fundamentais para o desenvolvimento web e versionamento de código, como:</p>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
  <li>Git</li>
  <li>GitHub</li>
</ul>

<p>Além disso, possuo uma experiência significativa no atendimento ao público, onde desenvolvi competências sociais e comportamentais essenciais, como proatividade, responsabilidade, adaptabilidade, comunicação eficaz, resolução de problemas e trabalho em equipe.</p>

<p>Outro marco importante na minha formação foi a conclusão do curso no Instituto PROA. Lá, aprimorei minhas competências técnicas e comportamentais, incluindo:</p>
<ul>
  <li>Excel</li>
  <li>Power BI</li>
  <li>Vendas</li>
  <li>Raciocínio Lógico</li>
  <li>Comunicação</li>
</ul>

<p>Complementando minha formação, também realizei cursos adicionais de Python, Pacote Office, Power BI e Design com o Canva. Sou extremamente grato por todas essas oportunidades que têm contribuído para o meu crescimento profissional e pessoal.</p>

<p>Sou um entusiasta da tecnologia e estou sempre em busca de novos desafios que me permitam crescer ainda mais. Estou ansioso para aplicar todo o conhecimento adquirido em um estágio na área de Tecnologia da Informação (TI) e contribuir de maneira significativa para a equipe.</p>

<p>Curiosidades sobre mim: adoro resolver quebra-cabeças e desafios lógicos nas horas vagas, e sou um grande fã de maratonar séries de ficção científica.</p>

<p>Caso queira conhecer mais sobre meus projetos e acompanhar minha evolução, sinta-se à vontade para visitar meu GitHub: <a href="https://github.com/gustavojoze">GitHub</a>.</p>

<p>Espero que aprenda bastante e se sinta inspirado(a) pela minha história. Vamos juntos nessa jornada de descobertas e aprendizado!</p>

        </PostModelo>//
    )
}