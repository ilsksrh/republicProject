package org.example.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name = "work_time")
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class WorkTime {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;
    @Column(name = "day")
    private int day;
    @Column(name = "status")
    private boolean status;
    @Column(name = "time_from")
    private String time_from;
    @Column(name = "time_end")
    private String time_end;
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "shelter_id", referencedColumnName = "id")
    private Shelter shelter;
}
