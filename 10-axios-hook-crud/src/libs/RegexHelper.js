import BadRequestException from '../exceptions/BadRequestException';

class RegexHelper {
    value(field, msg){
        const content = field.value;

        if(content === undefined || content === null || (typeof content === 'string' && content.trim().length === 0)) {
            throw new BadRequestException(msg, field);
        }
        return true;
    }

    maxLength(field, len, msg){
        this.value(field, msg);

        const content = field.value;

        if(content.trim().length > len){
            throw new BadRequestException(msg, field);
        }
        return true;
    }

    maxLength(field, len, msg){
        this.value(field, msg);

        let content = field.value;

        if(content.trim().length < len){
            throw new BadRequestException(msg, field);
        }
        return true;
    }

    compareTo(origin, compare, msg){
        this.value(origin, msg);
        this.value(compare, msg);
        
        var src = origin.value.trim();
        var dsc = compare.value.trim();

        if (src !== dsc){
            throw new BadRequestException(msg, origin);
        }

        return true;
    }
    
    check(field, msg){
        const checkedItem = Array.from(field).filter((v, i) => v.checked);

        if(checkedItem.length ===0){
            throw new BadRequestException(msg, field[0]);
        }
    }
    
    checkMin(field, len, msg){
        const checkedItem = Array.from(field).filter((v, i) => v.checked);

        if(checkedItem.length < len){
            throw new BadRequestException(msg, field[0]);
        }
    }

    checkMax(field, len, msg){
        const checkedItem = Array.from(field).filter((v, i) => v.checked);

        if(checkedItem.length > len){
            throw new BadRequestException(msg, field[0]);
        }
    }

    field(field, msg, regexExpr){
        this.value(field, msg);

        if (!regexExpr.test(field.value.trim())){
            throw new BadRequestException(msg, field);
        }
        return true;
    }

    num(field, msg){
        return this.field(field, msg, /^[0-9]*$/);
    }

    eng(field, msg){
        return this.field(field, msg, /^[a-zA-Z]*$/);
    }

    kor(field, msg){
        return this.field(field, msg, /^[???-??????-???]*$/);
    }

    engNum(field, msg){
        return this.field(field, msg, /^[a-zA-Z0-9]*$/);
    }

    korNum(field, msg){
        return this.field(field, msg, /^[???-??????-???0-9]*$/);
    }

    /*email(field, msg){
        return this.field(field, msg, /^[\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i);
    }*/

    cellphone(field, msg){
        return this.field(field, msg, /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/);
    }
    
    telephone(field, msg){
        return this.field(field, msg, /^\d{2,3}\d{3,4}\d{4}$/);
    }
    phone(field, msg) {
        this.value(field, msg);

        const content = field.value.trim();
        var check1 = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
        var check2 = /^\d{2,3}\d{3,4}\d{4}$/;

        if(!check1.test(content) && !check2.test(content)){
            throw new BadRequestException(msg, field);
        }

        return true;
    }
     
   
}

export default new RegexHelper();