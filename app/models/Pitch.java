package models;

import com.avaje.ebean.Model;

import models.User;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import java.util.ArrayList;

/**
 * Created by bambino on 5/20/16.
 */
@Entity
@Table(name = "PITCH")
public class Pitch extends Model {

    @Id
    public Long id;
    public String name;
    public String description;

    @ManyToMany(mappedBy="pitchId")
    @JoinTable(name = "PITCH_USERS_LU")
    public ArrayList<User> userId;

    public static Finder<Long,Pitch> find = new Finder<Long,Pitch>(Long.class,Pitch.class);
}
