package org.example.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Table(name = "message")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "content")
    private String content;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "sender_id")
    @JsonIgnore
    private User sender;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "recipient_id")
    @JsonIgnore
    private User recipient;

    @Column(name = "timestamp")
    private Date timestamp;

    public Message(String content, User sender, User recipient, Date timestamp) {
        this.content = content;
        this.sender = sender;
        this.recipient = recipient;
        this.timestamp = timestamp;
    }
}
