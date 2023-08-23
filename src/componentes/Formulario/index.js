import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'


const Formulario = ()=>{
    const times = [
        'Programação',
        'Frontend',
        'Data Science',
        'Devops',
        'Ux e Desing',
        'Mobile',
        'Inovação e Gestão'
    ]
    const aoSalvar = (evento)=>{
        evento.preventDefault()
        console.log('form foi submetido')
    }
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"/>
                <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem"/>
                <ListaSuspensa obrigatorio={true} label="Time" itens={times}/>
                <Botao texto="Criar Card">Criar Card</Botao>
            </form>
        </section>
    )
}
export default Formulario