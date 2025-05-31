import React, { useState, useRef, useEffect } from 'react';

import logotipoBiaMenu from '../images/logotipoBiaMenu.png';
import logotipoBia from '../images/logotipoBia.png';
import logoBia from '../images/logoBia.png';
import seta from '../images/Seta.png';
import flores from '../images/flores.png';
import whats from '../images/Whats.png';
import insta from '../images/Insta.png';
import bia from '../images/bia.png';
import lugar from '../images/lugar.jpeg';

import './Portfolio.css';
  
export default function Portfolio (){

    const [popupAberto, setPopupAberto] = useState(null);
    const [popupFechando, setPopupFechando] = useState(false);
    const [popupAnimando, setPopupAnimando] = useState(false);
    const popupRef = useRef(null);

    const fecharPopup = () => {
        setPopupFechando(true); 
        setTimeout(() => {
        setPopupAberto(null); 
        setPopupFechando(false);
        }, 300);
    };

    useEffect(() => {
    function handleClickOutside(event) {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            fecharPopup();;
        }
    }

    if (popupAberto && !popupFechando) {
        document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
    }, [popupAberto]);

    useEffect(() => {
  if (popupAberto) {
    // Espera o DOM renderizar o popup, então ativa animação
    const timer = setTimeout(() => {
      setPopupAnimando(true);
    }, 10); // tempo mínimo para permitir a transição

    return () => clearTimeout(timer);
  } else {
    setPopupAnimando(false);
  }
}, [popupAberto]);

    return (
        <>
            <div className='body'>
                <nav>
                    <ul  className='navbar'>
                        <li><a href="#home"><img src={logotipoBiaMenu} className='logotipoBiaMenu'/></a></li>
                        <li><a href="#especialidades" className='navbartitulo'>Especialidades</a></li>
                        <li><a href="#etapas" className='navbartitulo'>Etapas</a></li>
                        <li><a href="#abordagens" className='navbartitulo'>Abordasgens</a></li>
                        <li><a href="#experiencia" className='navbartitulo'>Experiência</a></li>
                        <li><a href="#contato" className='navbartitulo'>Contato</a></li>
                    </ul>
                </nav>
                {popupAberto && <div className="overlay"></div>}
                <section id='home' className='home'>
                    <div className='divlogotipo'>
                        <img src={logotipoBia} className='logohome'/>
                    </div>
                    <div className='divtitulohome'>
                        <label className='titulohome'>AMPLA EXPERIÊNCIA PROFISSIONAL E QUALIFICAÇÃO ACADÊMICA</label>
                    </div>
                    <div className='divseta'>
                        <a href="#especialidades"><img src={seta} className='imgseta'/></a>
                    </div>
                </section>

                <section id='especialidades'>
                    <div className='divsinfos'>
                        <div className='divespecialidades'>
                            <label className='tituloespecialidades'>Especialidades</label>

                            <div className='divclicavel' onClick={() => setPopupAberto('aprendizagem')}>
                                <label className='tituloitemespecialidades'>Dificuldades na aprendizagem</label>
                            </div>
                            
                            {popupAberto === 'aprendizagem' && (
                            <div ref={popupRef} className={`divclicada 
                            ${popupAnimando ? 'popup-ativa' : ''} 
                            ${popupFechando ? 'saindo' : ''}`}>
                                <div>
                                    <label className='tituloitemespecialidadesclicada'>Dificuldades na aprendizagem</label>
                                    <div className='divinfosespecialidades'>
                                        <label className='infosespecialidades'>"Dificuldades, transtornos ou até problemas de aprendizagem são desordens que dificultam o ritmo de aprendizado de uma pessoa. 
                                        </label> 
                                        <label className='infosespecialidades'>Esses problemas são detectados a partir dos cinco anos de idade e necessitam de acompanhamento de psicopedagogos, psicólogos, fonoaudiólogos e em alguns casos outros profissionais."
                                        </label>
                                    </div>
                                    </div>
                                </div>
                            )}

                            <div className='divclicavel' onClick={() => setPopupAberto('leitura')}>
                                <label  className='tituloitemespecialidades'>Dificuldades na leitura e escrita </label>
                            </div>
                            
                            {popupAberto === 'leitura' && (
                            <div ref={popupRef} className={`divclicada 
                            ${popupAnimando ? 'popup-ativa' : ''} 
                            ${popupFechando ? 'saindo' : ''}`}>                                    <div>
                                    <label className='tituloitemespecialidadesclicada'>"Dificuldades na leitura e escrita</label>
                                    <div className='divinfosespecialidades'>
                                        <label className='infosespecialidades'>"É uma incapacidade específica de aprendizagem caracterizada por dificuldades para se alfabetizar, entender o que lê, problemas para memorizar as palavras, regras ortográficas e conceitos, dispersão, falta de atenção, dificuldades em escrever de forma legível e sem erros ortográficos."
                                        </label> 
                                    </div>
                                    </div>
                                </div>
                            )}

                            <div className='divclicavel' onClick={() => setPopupAberto('raciocinio')}>
                                <label  className='tituloitemespecialidades'>Dificuldades no raciocínio lógico-matemático </label>
                            </div>
                            
                            {popupAberto === 'raciocinio' && (
                            <div ref={popupRef} className={`divclicada 
                            ${popupAnimando ? 'popup-ativa' : ''} 
                            ${popupFechando ? 'saindo' : ''}`}>                                    <div>
                                    <label className='tituloitemespecialidadesclicada'>Dificuldades no raciocínio lógico-matemático </label>
                                    <div className='divinfosespecialidades'>
                                        <label className='infosespecialidades'>"Dificuldade em fazer operações matemáticas e processos cognitivos afetados como: Velocidade de processamento de informação, memória de trabalho, memória em tarefas não verbais, memórias de curto e longo prazo, memória sequencial auditiva, habilidades visuo-espacias, habilidades psicomotoras e táteis."
                                        </label> 
                                    </div>
                                    </div>
                                </div>
                            )}

                            <div className='divclicavel'>
                                <label  className='tituloitemespecialidades'>Estimulação cognitiva de idosos</label>
                            </div>
                        </div>
                    </div>
                </section>

                <section id='etapas'>
                    <div className='divsinfos'>
                        <div className='divespecialidades'>
                            <label className='tituloetapas'>Etapas</label>

                            <div className='divclicavel' onClick={() => setPopupAberto('avaliacao')}>
                                <label className='tituloitemetapas'>Avaliação diegnóstica</label>
                            </div>
                            
                            {popupAberto === 'avaliacao' && (
                            <div ref={popupRef} className={`divclicada 
                            ${popupAnimando ? 'popup-ativa' : ''} 
                            ${popupFechando ? 'saindo' : ''}`}>                                    <div>
                                    <label className='tituloitemetapasclicada'>Avaliação diegnóstica</label>
                                    <div className='divinfosetapas'>
                                        <label className='infosespecialidades'>"Com base no conhecimento e funcionamento cerebral e sua repercussão cognitiva, através do diagnóstico psicopedagógico podemos mapear o nível de aquisição das competências mentais necessárias ao processamento dos conteúdos escolares."
                                        </label> 
                                    </div>
                                    </div>
                                </div>
                            )}

                            <div className='divclicavel' onClick={() => setPopupAberto('prevencao')}>
                                <label  className='tituloitemetapas'>Prevenção</label>
                            </div>
                            
                            {popupAberto === 'prevencao' && (
                            <div ref={popupRef} className={`divclicada 
                            ${popupAnimando ? 'popup-ativa' : ''} 
                            ${popupFechando ? 'saindo' : ''}`}>                                    <div>
                                    <label className='tituloitemetapasclicada'>Prevenção</label>
                                    <div className='divinfosetapas'>
                                        <label className='infosespecialidades'>"Ao tratar algumas dificuldades e transtornos de aprendizagem, podemos evitar o aparecimento de outros problemas. A ação preventiva do trabalho psicopedagógico é baseada na estimulação e orientação do processo ensino-aprendizagem, com o objetivo de favorecer a apropriação do conhecimento no aprendente ao longo de sua evolução."
                                        </label> 
                                    </div>
                                    </div>
                                </div>
                            )}

                            <div className='divclicavel' onClick={() => setPopupAberto('intervencao')}>
                                <label  className='tituloitemetapas'>Intervenção</label>
                            </div>
                            
                            {popupAberto === 'intervencao' && (
                            <div ref={popupRef} className={`divclicada 
                            ${popupAnimando ? 'popup-ativa' : ''} 
                            ${popupFechando ? 'saindo' : ''}`}>                                    <div>
                                    <label className='tituloitemetapasclicada'>Intervenção</label>
                                    <div className='divinfosetapas'>
                                        <label className='infosespecialidades'>"A intervenção psicopedagógica acontece após as sessões avaliativas onde foram encontradas hipóteses de causas das falhas na aprendizagem. Diante desses resultados o psicopedagogo elabora um plano de intervenção e inicia uma terapia da aprendizafem com propostas educativas de forma a estimular as áreas cerebrais que necessitam de intervenção."
                                        </label>
                                    </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <section id='abordagens'>
                    <div className='divsinfos'>
                        <div className='divespecialidades'>
                            <label className='tituloabordagens'>Abordagens</label>

                            <div className='divclicavel' onClick={() => setPopupAberto('psicopedagogo')}>
                                <label  className='tituloitemabordagens'>Psicopedagoga</label>
                            </div>
                            
                            {popupAberto === 'psicopedagogo' && (
                            <div ref={popupRef} className={`divclicada 
                            ${popupAnimando ? 'popup-ativa' : ''} 
                            ${popupFechando ? 'saindo' : ''}`}>                                    <div>
                                    <label className='tituloitemabordagensclicada'>Psicopedagoga</label>
                                    <div className='divinfosabordagens'>
                                        <label className='infosespecialidades'>"Psicopedagogo analisa e intervém em processos de ensino-aprendizagem, com o objetivo de otimizar o aprendizado. 
                                        </label> 
                                        <label className='infosespecialidades'> Principais atividades:
                                        </label>
                                        <label className='infosespecialidades'> Avaliar a qualidade do ensino-aprendizagem
                                        </label>
                                        <label className='infosespecialidades'> Identificar pontos fortes e fracos da relação entre educadores e alunos
                                        </label>
                                        <label className='infosespecialidades'> Analisar a infraestrutura e os estímulos didáticos
                                        </label>
                                        <label className='infosespecialidades'> Desenvolver planos de intervenção para corrigir defasagens no ensino
                                        </label>
                                        <label className='infosespecialidades'> Atender às necessidades especiais de alunos
                                        </label>
                                        <label className='infosespecialidades'> Orientar e supervisionar professores e pedagogos
                                        </label>
                                        <label className='infosespecialidades'> Investigar e analisar as potencialidades de cada indivíduo
                                        </label>
                                        <label className='infosespecialidades'> Buscar métodos mais efetivos de ensino-aprendizagem
                                        </label>
                                        <label className='infosespecialidades'> Identificar problemas e propor soluções
                                        </label>
                                        <label className='infosespecialidades'> Áreas de atuação Escolas, Clínicas, Empresas."
                                        </label>
                                    </div>
                                    </div>
                                </div>
                            )}

                            <div className='divclicavel' onClick={() => setPopupAberto('trans')}>
                                <label className='tituloitemabordagens'>Psicologia transpessoal</label>
                            </div>
                            
                            {popupAberto === 'trans' && (
                            <div ref={popupRef} className={`divclicada 
                            ${popupAnimando ? 'popup-ativa' : ''} 
                            ${popupFechando ? 'saindo' : ''}`}>                                    <div>
                                    <label className='tituloitemabordagensclicada'>Psicologia transpessoal</label>
                                    <div className='divinfosabordagens'>
                                        <label className='infosespecialidades'>"Nossa metodologia se baseia na abordagem transdisciplinar holística e se diferencia pelo processo do Cuidado Integral. Essa abordagem alia o método analítico ao sintético, orientando-se por uma cartografia vasta e inclusiva da totalidade humana, na tarefa de desenvolver uma Terapia da Inteireza que alia o pré-pessoal ao pessoal e ao transpessoal."
                                        </label> 
                                    </div>
                                    </div>
                                </div>
                            )}

                            <div className='divclicavel' onClick={() => setPopupAberto('aee')}>
                                <label  className='tituloitemabordagens'>Atendimento Educacional Especializado</label>
                            </div>
                            
                            {popupAberto === 'aee' && (
                            <div ref={popupRef} className={`divclicada 
                            ${popupAnimando ? 'popup-ativa' : ''} 
                            ${popupFechando ? 'saindo' : ''}`}>                                    <div>
                                    <label className='tituloitemabordagensclicada'>Atendimento Educacional Especializado</label>
                                    <div className='divinfosabordagens'>
                                        <label className='infosespecialidades'>"O AEE é um serviço que identifica, elabora e organiza recursos pedagógicos e de acessibilidade para eliminar as barreiras para a plena participação dos alunos."
                                        </label> 
                                    </div>
                                    </div>
                                </div>
                            )}

                            
                        </div>
                    </div>
                </section>

                <section id='experiencia'>
                    <div>
                        <div className='divexperiencia'>
                            <div className='experiencia'>
                                <img src={logoBia} className='logo'/>
                                <div className='texto'>
                                    <label className='tituloexperiencia'>Formação acadêmica</label>
                                    <label className='infoexperiencia'>Mediação Escolar - Puc</label>
                                    <label className='infoexperiencia'>Gestão Escolar - Unicamp e Usp</label>
                                    <label className='infoexperiencia'>Marketing em Educação - UFRJ</label>
                                    <label className='infoexperiencia'>Psicologia Transpessoal - Unipaz</label>
                                    <label className='infoexperiencia'>Psicopedagogia </label>
                                    <label className='infoexperiencia'>Necessidade Educacional Especial</label>
                                    <label className='infoexperiencia'>MÉTODO P.A.P. 2.0 - Psicopedagogia em Ação</label>
                                    <label className='infoexperiencia'>Cursando ABA na Prática - Ellen Souza</label>  
                                </div>
                            </div>
                            <div className='experiencia'> 
                                <img src={logoBia} className='logo'/>
                                <div className='texto'>
                                    <label className='tituloexperiencia'>Experiência profissional</label>
                                    <label className='infoexperiencia'>Magistério - 5 anos</label>
                                    <label className='infoexperiencia'>Letras - professora - 12 anos</label>
                                    <label className='infoexperiencia'>Pedagogia - Diretora de Escola - 15 anos</label>
                                    <label className='infoexperiencia'>Professora de Educação Especial - 2 anos</label>
                                    <label className='infoexperiencia'>Professora de Dificuldades de Aprendizagem - 7 anos </label> 
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id='contato'>
                    <div>
                        <img src={flores} className='flores'/>
                        <div className='textocont'>
                            <label className='titulocontato'>Transforme dificuldades em aprendizagens</label>
                            <label className='titulocontato2'>Contate-nos</label>
                        </div>

                        <div className='contatocont'> 

                            <div className='cont'>
                                <img src={whats} className='redes'/>
                                <div className='linkcontconteiner'>
                                    <a href='https://wa.me/5511952331964' className='linkcont'>+55 11 95233-1964</a>
                                </div>
                            </div>

                            <div className='cont'>
                                <img src={insta} className='redes'/>
                                <div className='linkcontconteiner'>
                                    <a href='https://www.instagram.com/biacastanhopsicopedagoga/?igsh=eWJkb3I3ZTUycjZx' className='linkcont'>@biacastanhopsicopedagoga</a>
                                </div>
                            </div>
                                    
                        </div>
                        
                        <div className='fotos'>
                        <div className='divfotoendereco'>
                            <label className='titulofotos'>Nosso endereço de atendimento</label>
                            <img src={lugar} className='lugar'/>
                            <label className='titulofotos'>Espaço Bougainvillea</label>
                            <a href='https://www.google.com/search?sca_esv=8f2d608cc335416a&hl=pt-BR&gl=br&output=search&kgmid=/g/11yd8lxyhr&q=Psicopedagoga+Rudge+Ramos+São+Bernardo+do+Campo+Beatriz+Castanho&shndl=30&source=sh/x/loc/act/m1/2&kgs=79bd9268d79bf61b' className='descfotos'>R. Eng. Luís Scala Júnior, 149 - Rudge Ramos, São Bernardo do Campo - SP, 09625-020</a>

                            <div className='divfotobia'>
                                <img src={bia} className='bia'/>
                                <div className='divtextofotobia'>
                                    <label className='titulofotos'>Bia Castanho</label>
                                    <label className='descfotos'>Psicopedagoga com vasto caminhar entre saberes e afetos, guiada pela sensibilidade e pela escuta profunda. Com olhar atento, dedica-se a revelar os potenciais únicos de cada criança e jovem, cuidando do desabrochar de potenciais adormecidos. Une conhecimento e intuição para acender caminhos de autoconhecimento, confiança e leveza, onde cada passo é semente, e cada conquista: Uma flor.</label>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}