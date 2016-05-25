package models;

import com.avaje.ebean.Model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import java.util.ArrayList;

/**
 * Created by bambino on 5/20/16.
 */
@Entity
@Table(name = "PITCH")
public class Pitch extends Model {

    @Id
    public Long id;
    public String title;
    public String description;
    public ArrayList<Long> memberIds;

    public static Finder<Long,Pitch> find = new Finder<Long,Pitch>(Long.class,Pitch.class);
}
