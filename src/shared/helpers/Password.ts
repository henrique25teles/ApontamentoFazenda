export function decrypt(texto: string): string {
    let sana = 0;
    let salasana = 0;
    let g = 0;
    let x1 = 0;

    let decrypted = "";

    for (let i = 0; i < texto.length; i++) {
        try {
            sana = parseInt(texto.charAt(i));
            g++;

            if (g == 6) {
                g = 0;
                x1 = 0;
            }
            if (g == 0) {
                x1 = sana + (salasana - 2);
            }
            if (g == 1) {
                x1 = sana - (salasana - 5);
            }
            if (g == 2) {
                x1 = sana + (salasana - 4);
            }
            if (g == 3) {
                x1 = sana - (salasana - 2);
            }
            if (g == 4) {
                x1 = sana + (salasana - 3);
            }
            if (g == 5) {
                x1 = sana - (salasana - 5);
            }

            x1 = x1 - g;
            decrypted = decrypted + x1.toString();
        } catch (e) {
            continue;
        }
    }

    return decrypted;
}

export function decrypt2(texto: string): string {

    let strTempChar = 0;
    let decrypted = "";

    for (let i = 0; i < texto.length; i++) {
        try {
            strTempChar = parseInt(texto.charAt(i));

            if (strTempChar == 130) {
                strTempChar = 130;
            } else if (strTempChar > 129) {
                if ((strTempChar + 2) < 255) {
                    strTempChar = strTempChar - 2;
                }
            } else if (strTempChar < 129) {
                strTempChar = strTempChar - 10;
            }

            if (strTempChar < 128) {
                strTempChar = strTempChar + 128;
            } else if (strTempChar > 130) {
                strTempChar = strTempChar - 128;
            }

            decrypted = decrypted + strTempChar.toString();
        } catch (e) {
            continue;
        }
    }

    return decrypted;
}
