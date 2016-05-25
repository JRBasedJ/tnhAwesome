package controllers;

import models.Pitch;
import play.data.Form;
import play.libs.Json;
import play.mvc.BodyParser;
import play.mvc.Controller;
import play.mvc.Result;

import static play.data.Form.form;

/**
 * Created by bambino on 5/20/16.
 */
public class Pitches extends Controller {

    /**
     * Create pitch
     *
     * @return
     */
    @BodyParser.Of(BodyParser.Json.class)
    public Result create(Long pitchId) {

        try {
            // get pitch from request
            Form<Pitch> pitchForm = form(Pitch.class);
            pitchForm = pitchForm.bind(request().body().asJson());
            Pitch pitch = pitchForm.get();
            pitch.save();

        } catch (Exception e) {
            return badRequest(e.getMessage());
        }

        return ok();
    }

    /**
     * Get pitch by id
     *
     * @param id
     * @return
     */
    public Result get(Long id) {
        return ok(Json.toJson(Pitch.find.byId(id)));
    }

    /**
     * Get all pitches
     *
     * @return
     */
    public Result list() {
        return ok(Json.toJson(Pitch.find.all()));
    }

    /**
     * update a pitch
     *
     * @return
     */
    @BodyParser.Of(BodyParser.Json.class)
    public Result update() {

        try {
            // get pitch from request
            Form<Pitch> pitchForm = form(Pitch.class);
            pitchForm = pitchForm.bind(request().body().asJson());
            Pitch updatedPitch = pitchForm.get();

            // update pitch fields
            if (updatedPitch != null) {
                updatedPitch.save();
            }

        } catch (Exception e) {
            return badRequest(e.getMessage());
        }

        return ok();
    }

    /**
     * Delete pitch by id
     *
     * @param id
     * @return
     */
    public Result delete(Long id) {

        Pitch pitch = Pitch.find.byId(id);

        if (pitch != null) {
            pitch.delete();
        }

        return ok();
    }
}