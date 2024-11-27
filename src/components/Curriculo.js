import React from 'react';
import { Card, Grid, Typography, Divider } from '@mui/material';
import Perfil from '../images/perfil.jpg';

export default function Curriculo() {
    const experiencias = [
        {
            titulo: "Desenvolvedor Full Stack Pleno",
            empresa: "Automatize/Consulta Global - Freelance",
            periodo: "jun de 2024 - o momento · 6 meses",
            local: "Brasília, Distrito Federal, Brasil · Remota",
            descricao: `
                - Desenvolvimento Full Stack do sistema Consulta Global, atuando desde o levantamento de requisitos até a fase de codificação (atual), com foco na construção de uma aplicação robusta e escalável.
                - Utilização de React JS para a interface do usuário e Laravel para o desenvolvimento da API, garantindo a integração eficiente entre o front-end e o back-end.
                - Responsável por implementar soluções otimizadas, colaborando diretamente com as etapas de análise, planejamento e execução do projeto.
            `,
            competencias: "React JS e Laravel"
        },
        {
            titulo: "Desenvolvedor Full Stack",
            empresa: "CNM - Confederação Nacional de Municípios · Tempo integral",
            periodo: "dez de 2022 - o momento · 2 anos",
            local: "Brasília e Região · Presencial",
            descricao: `
                - Contribuição ativa desde o levantamento de requisitos até o deploy final dos projetos, trabalhando em um ambiente colaborativo para entregar soluções robustas e eficientes;
                - Atuação no desenvolvimento de um sistema que otimiza a gestão de participantes, hotéis e passagens, melhorando significativamente a eficiência operacional em eventos;
                - Participação no sistema de credenciamento da Marcha dos Prefeitos, onde implementei gráficos de mapa, totens de autoatendimento e etiquetas de identificação personalizadas, gerenciando a participação de mais de 10.000 pessoas;
                - Reestruturação do sistema de cadastro de processos da empresa utilizando React no front-end e construí uma API Laravel, garantindo desempenho, robustez, e conformidade regulatória, além de gerenciar o cadastro de mais de 60 processos internos;
                - Manutenção contínua de sites desenvolvidos com Vue JS, React JS e Laravel, assegurando estabilidade, desempenho, e continuidade das operações;
                - Responsável pela criação da documentação de projetos sem registros formais, utilizando UML, análise de fluxo e revisão de código para padronizar e melhorar o entendimento dos sistemas;
                - Desenvolvimento de aplicação para gerenciar processos empresariais alinhados com as diretrizes da LGPD, utilizando Laravel e Blade, garantindo conformidade e eficiência na manipulação de dados;
                - Criação do site de divulgação do principal evento da empresa, utilizando React JS para o front-end e consumindo APIs REST, além de realizar a manutenção de sistemas e hotsites para assegurar o desempenho e a continuidade das operações.
            `,
            competencias: "Git, React JS, Vue JS, Laravel, CodeIgniter, PHP, Node, TypeScript e JavaScript"
        }
    ];

    const formacoes = [
        {
            curso: "Curso Superior de Tecnologia (CST), Análise e Desenvolvimento de Sistemas",
            instituicao: "Anhanguera Educacional",
            periodo: "jan de 2022 - dez de 2023",
            competencias: "Desenvolvimento de Software, Teste de software e Análise de Sistemas"
        },
        {
            curso: "EMBARCATECH - Capacitação Profissional em Sistemas Embarcados, Tecnologia da Informação",
            instituicao: "IFMA - Instituto Federal do Maranhão",
            periodo: "nov de 2024 - fev de 2025",
            competencias: "C (linguagem de programação), Programação lógica e Internet das Coisas"
        }
    ];

    const idiomas = [
        { idioma: "Inglês 🇺🇸", nivel: "⭐⭐⭐ (Intermediário)" },
        { idioma: "Francês 🇫🇷", nivel: "⭐⭐⭐ (Intermediário)" }
    ];

    return (
        <Grid container justifyContent="center" alignItems="center" sx={{ marginTop: '2rem' }}>
            <Card sx={{ width: '90vw', height: 'auto', borderRadius: '25px', padding: '2rem', backgroundColor: 'rgba(255, 255, 255, 0.8)' }} elevation={8}>
                <Grid container spacing={2} alignItems="center" sx={{ marginBottom: '2rem' }}>
                    <Grid item xs={2} display="flex" justifyContent="flex-start">
                        <img src={Perfil} alt="Imagem de perfil" style={{ borderRadius: '50%', width: '100%' }} />
                    </Grid>
                    <Grid item xs={10} display="flex" justifyContent="center" alignItems="center">
                            <Typography sx={{ fontWeight: 'bold', color: 'var(--cinza-fonte)', fontSize: '2rem', textAlign: 'center', userSelect: "none" }}>
                            Currículo
                        </Typography>
                    </Grid>
                </Grid>

                <Typography sx={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'flex-start', userSelect: "none" }}>
                    Experiência
                </Typography>
                <Divider sx={{ marginBottom: '1rem' }} />
                {experiencias.map((exp, index) => (
                    <Grid key={index} sx={{ marginBottom: '1rem' }}>
                        <Typography sx={{ fontWeight: 'bold', color: 'var(--azul)', userSelect: "none" }}>{exp.titulo}</Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                            {exp.empresa}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {exp.periodo} - {exp.local}
                        </Typography>
                        <Typography sx={{ marginTop: '1rem', whiteSpace: 'pre-wrap' }}>
                            {exp.descricao}
                        </Typography>
                        <Typography sx={{ marginTop: '1rem', fontStyle: 'italic', color: 'gray' }}>
                            {exp.competencias}
                        </Typography>
                    </Grid>
                ))}

                <Typography sx={{ fontWeight: 'bold', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', textAlign: 'flex-start' }}>
                    Formação Acadêmica
                </Typography>
                <Divider sx={{ marginBottom: '1rem' }} />
                {formacoes.map((formacao, index) => (
                    <Grid key={index} sx={{ marginBottom: '1rem' }}>
                        <Typography sx={{ fontWeight: 'bold', color: 'var(--azul)', fontSize: '1.2rem' }}>
                            {formacao.curso}
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                            {formacao.instituicao}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {formacao.periodo}
                        </Typography>
                        <Typography sx={{ marginTop: '1rem', fontStyle: 'italic', color: 'gray' }}>
                            {formacao.competencias}
                        </Typography>
                    </Grid>
                ))}

                <Typography sx={{ fontWeight: 'bold', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', textAlign: 'flex-start' }}>
                    Idiomas
                </Typography>
                <Divider sx={{ marginBottom: '1rem' }} />
                {idiomas.map((idioma, index) => (
                    <Grid key={index} sx={{ marginBottom: '1rem' }}>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                            {idioma.idioma}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {idioma.nivel}
                        </Typography>
                    </Grid>
                ))}
            </Card>
        </Grid>
    );
}
