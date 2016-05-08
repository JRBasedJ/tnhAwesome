package controllers;

import models.User;
import play.data.Form;
import play.libs.Json;
import play.mvc.BodyParser;
import play.mvc.Controller;
import play.mvc.Result;

import java.util.Date;

import static play.data.Form.form;

/**
 * Created by perryspyropoulos on 5/2/16.
 */
public class Users extends Controller {

    /**
     * Create user
     * @return
     */
    @BodyParser.Of(BodyParser.Json.class)
    public Result create() {

        try {
            // get user from request
            Form<User> userForm = form(User.class);
            userForm = userForm.bind(request().body().asJson());
            User user = userForm.get();

            // only create if user doesn't already exist
            if(findByEmail(user.email) == null) {
                user.save();
            }

        } catch (Exception e) {
            return badRequest(e.getMessage());
        }

        return ok();
    }

    /**
     * Get user by id
     * @param id
     * @return
     */
    public Result get(Long id) {
        return ok(Json.toJson(User.find.byId(id)));
    }

    /**
     * Get all users
     * @return
     */
    public Result list() {
        return ok(Json.toJson(User.find.all()));
    }

    /**
     * update a user
     * @return
     */
    @BodyParser.Of(BodyParser.Json.class)
    public Result update() {

        try {
            // get user from request
            Form<User> userForm = form(User.class);
            userForm = userForm.bind(request().body().asJson());
            User updatedUser = userForm.get();

            // find user in db
            User user = User.find.byId(updatedUser.id);

            // update user fields
            if(user != null) {
                user.email = updatedUser.email;
                user.fullname = updatedUser.fullname;
                user.password = updatedUser.password;
                user.save();
            }

        } catch (Exception e) {
            return badRequest(e.getMessage());
        }

        return ok();
    }

    /**
     * Delete user by id
     * @param id
     * @return
     */
    public Result delete(Long id) {

        User user = User.find.byId(id);

        if (user != null) {
            user.delete();
        }

        return ok();
    }

    /**
     * helper method to find user by email
     * @param email
     * @return
     */
    private User findByEmail(String email) {
        return User.find.where().ilike("email", email).findUnique();
    }

}
