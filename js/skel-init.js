/*jshint -W117 */

skel.init({
    prefix: "css/style",//La carpeta y el prefijo de los estilos
    resetCSS: true,     //Elimina los valores por defecto del navegador
    boxModel: "border",
    grid: {
        gutters: 30 //Espaciado global del grid de 30px
    },
    breakpoints: {
        wide: {
            range: "1200-",
            containers: 1140,
            grid: {
                gutters: 50
            }
        },
        narrow: {
            range: "481-1199",
            containers: 960
        },
        mobile: {
            range: "-480",
            containers: "fluid",
            lockViewport: true,
            grid: {
                collapse: true
            }
        }
    }
});
