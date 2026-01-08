import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// CONFIGURAÇÃO
const pastaAlvo = './src/assets/img/img-insta';
const larguraMaxima = 1600;
const qualidade = 80; 

async function processarImagens() {
    try {
        const arquivos = fs.readdirSync(pastaAlvo);

        for (const arquivo of arquivos) {
            // Pula se não for imagem
            if (!arquivo.match(/\.(jpg|jpeg|png|webp)$/i)) continue;

            const caminhoOriginal = path.join(pastaAlvo, arquivo);
            const caminhoTemp = path.join(pastaAlvo, `temp_${arquivo}`);

            // Pega metadados para ver o tamanho atual
            const metadata = await sharp(caminhoOriginal).metadata();

            // Só redimensiona se for maior que o limite
            if (metadata.width > larguraMaxima) {
                console.log(`Redimensionando: ${arquivo} (${metadata.width}px -> ${larguraMaxima}px)`);

                await sharp(caminhoOriginal)
                    .resize({ width: larguraMaxima, withoutEnlargement: true })
                    .toFormat(metadata.format, { quality: qualidade })
                    .toFile(caminhoTemp);

                // Substitui o original pelo redimensionado
                fs.renameSync(caminhoTemp, caminhoOriginal);
            } else {
                console.log(`Pulado (já é pequeno): ${arquivo}`);
            }
        }
        console.log('✅ Processo finalizado!');
    } catch (erro) {
        console.error('Erro:', erro);
    }
}

processarImagens();