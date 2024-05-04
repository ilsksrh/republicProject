package org.example.service.props;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@Data
@ConfigurationProperties("minio")
public class MinioProperties {
    @Value("${spring.minio.bucket}")
    private String bucket;
    @Value("${spring.minio.url}")
    private String url;
    @Value("${spring.minio.access-key}")
    private String accessKey;
    @Value("${spring.minio.secret-key}")
    private String secretKey;
}
