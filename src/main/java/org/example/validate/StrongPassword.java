package org.example.validate;

import java.lang.annotation.*;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

@Constraint(validatedBy = StrongPasswordValidator.class)
@Target({ ElementType.METHOD, ElementType.FIELD })
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface StrongPassword {
    String message() default "Должно состоять из 6 символов и комбинации прописных и строчных букв и цифр.";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}