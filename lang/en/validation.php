<?php
declare(strict_types=1);

return [
    "accepted" => "El campo :attribute debe ser aceptado.",
    "accepted_if" =>
        "El campo :attribute debe ser aceptado cuando :other es :value.",
    "active_url" => "El campo :attribute debe ser una URL válida.",
    "after" => "El campo :attribute debe ser una fecha posterior a :date.",
    "after_or_equal" =>
        "El campo :attribute debe ser una fecha posterior o igual a :date.",
    "alpha" => "El campo :attribute solo debe contener letras.",
    "alpha_dash" =>
        "El campo :attribute solo debe contener letras, números, guiones y guiones bajos.",
    "alpha_num" => "El campo :attribute solo debe contener letras y números.",
    "any_of" => "El campo :attribute es inválido.",
    "array" => "El campo :attribute debe ser un conjunto (array).",
    "ascii" =>
        "El campo :attribute solo debe contener caracteres alfanuméricos y símbolos de un solo byte.",
    "before" => "El campo :attribute debe ser una fecha anterior a :date.",
    "before_or_equal" =>
        "El campo :attribute debe ser una fecha anterior o igual a :date.",
    "between" => [
        "array" =>
            "El campo :attribute debe tener entre :min y :max elementos.",
        "file" => "El campo :attribute debe pesar entre :min y :max kilobytes.",
        "numeric" => "El campo :attribute debe estar entre :min y :max.",
        "string" =>
            "El campo :attribute debe tener entre :min y :max caracteres.",
    ],
    "boolean" => "El campo :attribute debe ser verdadero o falso.",
    "can" => "El campo :attribute contiene un valor no autorizado.",
    "confirmed" => "La confirmación del campo :attribute no coincide.",
    "contains" => "Al campo :attribute le falta un valor requerido.",
    "current_password" => "La contraseña es incorrecta.",
    "date" => "El campo :attribute debe ser una fecha válida.",
    "date_equals" => "El campo :attribute debe ser una fecha igual a :date.",
    "date_format" =>
        "El campo :attribute no corresponde con el formato :format.",
    "decimal" => "El campo :attribute debe tener :decimal lugares decimales.",
    "declined" => "El campo :attribute debe ser rechazado.",
    "declined_if" =>
        "El campo :attribute debe ser rechazado cuando :other es :value.",
    "different" => "Los campos :attribute y :other deben ser diferentes.",
    "digits" => "El campo :attribute debe ser un número de :digits dígitos.",
    "digits_between" =>
        "El campo :attribute debe tener entre :min y :max dígitos.",
    "dimensions" =>
        "El campo :attribute   tiene dimensiones de imagen inválidas.",
    "distinct" => "El campo :attribute tiene un valor duplicado.",
    "doesnt_end_with" =>
        "El campo :attribute no debe terminar con uno de los siguientes: :values.",
    "doesnt_start_with" =>
        "El campo :attribute no debe comenzar con uno de los siguientes: :values.",
    "email" =>
        "El campo :attribute debe ser una dirección de correo electrónico válida.",
    "ends_with" =>
        "El campo :attribute debe terminar con uno de los siguientes: :values.",
    "enum" => "El campo :attribute seleccionado es inválido.",
    "exists" => "El campo :attribute seleccionado es inválido.",
    "file" => "El campo :attribute debe ser un archivo.",
    "filled" => "El campo :attribute debe tener un valor.",
    "gt" => [
        "array" => "El campo :attribute debe tener más de :value elementos.",
        "file" => "El campo :attribute debe pesar más de :value kilobytes.",
        "numeric" => "El campo :attribute debe ser mayor que :value.",
        "string" => "El campo :attribute debe tener más de :value caracteres.",
    ],

    "gte" => [
        "array" => "El campo :attribute debe tener :value elementos o más.",
        "file" => "El campo :attribute debe pesar :value kilobytes o más.",
        "numeric" => "El campo :attribute debe ser mayor o igual que :value.",
        "string" => "El campo :attribute debe tener :value caracteres o más.",
    ],
    "image" => "El campo :attribute debe ser una imagen.",
    "in" => "El campo :attribute seleccionado es inválido.",
    "in_array" => "El campo :attribute no existe en :other.",
    "integer" => "El campo :attribute debe ser un número entero.",
    "ip" => "El campo :attribute debe ser una dirección IP válida.",
    "ipv4" => "El campo :attribute debe ser una dirección IPv4 válida.",
    "ipv6" => "El campo :attribute debe ser una dirección IPv6 válida.",
    "json" => "El campo :attribute debe ser una cadena JSON válida.",
    "lowercase" => "El campo :attribute debe estar en minúscula.",
    "lt" => [
        "array" => "El campo :attribute debe tener menos de :value elementos.",
        "file" => "El campo :attribute debe pesar menos de :value kilobytes.",
        "numeric" => "El campo :attribute debe ser menor que :value.",
        "string" =>
            "El campo :attribute debe tener menos de :value caracteres.",
    ],
    "lte" => [
        "array" => "El campo :attribute no debe tener más de :value elementos.",
        "file" => "El campo :attribute debe pesar :value kilobytes o menos.",
        "numeric" => "El campo :attribute debe ser menor o igual que :value .",
        "string" => "El campo :attribute debe tener :value caracteres o menos.",
    ],
    "mac_address" => "El campo :attribute debe ser una dirección MAC válida.",
    "max" => [
        "array" =>
            "El campo :attribute no debe tener más de :max elementos           .",
        "file" => "El campo :attribute no debe pesar más de :max kilobytes.",
        "numeric" => "El campo :attribute no debe ser mayor que :max.",
        "string" => "El campo :attribute no debe tener más de :max caracteres.",
    ],
    "max_digits" => "El campo :attribute no debe tener más de :max dígitos.",
    "mimes" => "El campo :attribute debe ser un archivo de tipo: :values.",
    "mimetypes" => "El campo :attribute debe ser un archivo de tipo: :values.",
    "min" => [
        "array" => "El campo :attribute debe tener al menos :min elementos.",
        "file" => "El campo :attribute debe pesar al menos :min kilobytes.",
        "numeric" => "El campo :attribute debe ser al menos :min.",
        "string" => "El campo :attribute debe tener al menos :min caracteres.",
    ],
    "min_digits" => "El campo :attribute debe tener al menos :min dígitos.",
    "missing" => "El campo :attribute debe estar ausente.",
    "missing_if" =>
        "El campo :attribute debe estar ausente cuando :other es :value.",
    "missing_unless" =>
        "El campo :attribute debe estar ausente a menos que :other sea :value.",
    "missing_with" =>
        "El campo :attribute debe estar ausente cuando :values esté presente.",
    "missing_with_all" =>
        "El campo :attribute debe estar ausente cuando :values estén presentes.",
    "multiple_of" => "El campo :attribute debe ser un múltiplo de :value.",
    "not_in" => "El campo :attribute seleccionado es inválido.",
    "not_regex" => "El campo :attribute tiene un formato inválido.",
    "numeric" => "El campo :attribute debe ser un número.",
    "password" => [
        "letters" => "El campo :attribute debe contener al menos una letra.",
        "mixed" =>
            "El campo :attribute debe contener al menos una letra mayúscula y una letra minúscula.",
        "numbers" => "El campo :attribute debe contener al menos un número.",
        "symbols" => "El campo :attribute debe contener al menos un símbolo.",
        "uncompromised" =>
            "El campo :attribute dado ha aparecido en una filtración de datos. Por favor elige un :attribute diferente.",
    ],
    "present" => "El campo :attribute debe estar presente.",
    "prohibited" => "El campo :attribute está prohibido.",
    "prohibited_if" =>
        "El campo :attribute está prohibido cuando :other es :value.",
    "prohibited_unless" =>
        "El campo :attribute está prohibido a menos que :other sea :value.",
    "prohibited_with" =>
        "El campo :attribute está prohibido cuando :values esté presente.",
    "prohibited_with_all" =>
        "El campo :attribute está prohibido cuando :values estén presentes.",
    "regex" => "El campo :attribute tiene un formato inválido.",
    "required" => "El campo :attribute es obligatorio.",
    "required_if" =>
        "El campo :attribute es obligatorio cuando :other es :value.",
    "required_unless" =>
        "El campo :attribute es obligatorio a menos que :other sea :value.",
    "required_with" =>
        "El campo :attribute es obligatorio cuando :values esté presente.",
    "required_with_all" =>
        "El campo :attribute es obligatorio cuando :values estén presentes.",
    "required_without" =>
        "El campo :attribute es obligatorio cuando :values no esté presente.",
    "required_without_all" =>
        "El campo :attribute es obligatorio cuando ninguno de los :values estén presentes.",
    "same" => "Los campos :attribute y :other deben coincidir.",
    "size" => [
        "array" => "El campo :attribute debe contener :size elementos.",
        "file" => "El campo :attribute debe pesar :size kilobytes.",
        "numeric" => "El campo :attribute debe ser :size.",
        "string" => "El campo :attribute debe contener :size caracteres.",
    ],
    "starts_with" =>
        "El campo :attribute debe comenzar con uno de los siguientes: :values.",
    "string" => "El campo :attribute debe ser una cadena de texto.",
    "timezone" => "El campo :attribute debe ser una zona horaria válida.",
    "ulid" => "El campo :attribute debe ser un ULID válido.",
    "unique" => "El campo :attribute ya ha sido registrado.",
    "uploaded" => "El campo :attribute no se pudo subir.",
    "url" => "El campo :attribute debe ser una URL válida.",
    "uuid" => "El campo :attribute debe ser un UUID válido.",

    "custom" => [
        "nombre_completo" => [
            "required" => "El campo :attribute es obligatorio.",
            "string" => "El nombre debe ser una cadena de texto.",
            "min" => "El nombre debe tener al menos :min caracteres.",
            "max" => "El nombre no debe tener más de :max caracteres.",
            "unique" => "El nombre de esta categoría ya está en uso.",
            "regex" =>
                "El nombre solo puede contener letras, números y espacios.",
        ],
        "documento" => [
            "required" => "El campo :attribute es obligatorio.",
            "string" => "El documento debe ser una cadena de texto.",
            "max" => "El documento no debe tener más de :max caracteres.",
            "unique" => "El documento ya ha sido registrado.",
        ],
        "email" => [
            "required" => "El campo :attribute es obligatorio.",
            "string" => "El correo electrónico debe ser una cadena de texto.",
            "email" =>
                "El correo electrónico debe ser una dirección de correo válida.",
            "max" =>
                "El correo electrónico no debe tener más de :max caracteres.",
            "unique" => "El correo electrónico ya ha sido registrado.",
        ],
        "numero_poliza" => [
            "required" => "El campo :attribute es obligatorio.",
            "string" => "El número de póliza debe ser una cadena de texto.",
            "max" =>
                "El número de póliza no debe tener más de :max caracteres.",
            "unique" => "El número de póliza ya ha sido registrado.",
        ],
    ],

    "attributes" => [
        "nombre_completo" => "nombre completo",
        "documento" => "documento",
        "fecha_nacimiento" => "fecha de nacimiento",
        "genero" => "género",
        "direccion" => "dirección",
        "telefono" => "teléfono",
        "email" => "correo electrónico",
        "estado_civil" => "estado civil",
        "ocupacion" => "ocupación",
        "nivel_educativo" => "nivel educativo",
        "etnia_religion" => "etnia/religión",
        "entidad_aseguradora" => "entidad aseguradora",
        "tipo_plan" => "tipo de plan",
        "numero_poliza" => "número de póliza",
        "responsable_nombre" => "nombre del responsable",
        "responsable_parentesco" => "parentesco del responsable",
        "responsable_telefono" => "teléfono del responsable",
    ],
];
