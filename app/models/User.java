package models;

import com.avaje.ebean.Model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by perryspyropoulos on 5/2/16.
 */
@Entity
@Table(name = "USER")
public class User extends Model {

    @Id
    public Long id;
    public String email;
    public String fullname;
    public String password;

    public static Finder<Long,User> find = new Finder<Long,User>(Long.class,User.class);

}
