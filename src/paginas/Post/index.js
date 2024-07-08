import './Post.css'
import ReactMarkdown from "react-markdown"
import { Route, useParams, Routes } from "react-router-dom"
import posts from "json/posts.json"
import PostModelo from "componentes/PostModelo";
import NaoEncontrado from 'paginas/NaoEncontrada';
import PaginaPadrao from 'componentes/PaginaPadrao';

export default function Post() {
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })

    if (!post) {
        return <NaoEncontrado />
    }

    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route index element={
                    <PostModelo
                        fotoCapa={`/assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo}
                    >
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>
                    </PostModelo>
                } />
            </Route>
        </Routes>


    )
}
