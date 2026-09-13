package dev.tomis.movies.controller;

import dev.tomis.movies.entity.Review;
import dev.tomis.movies.service.ReviewService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/reviews")
@CrossOrigin(origins = "*")
public class ReviewController {
    @Autowired
    private ReviewService service;

    @GetMapping()
    public ResponseEntity<List<Review>> getReviews() {
        return new ResponseEntity<List<Review>>(service.findAllReviews(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Review>> getReviewById(@PathVariable ObjectId id)  {
        return new ResponseEntity<Optional<Review>>(service.findReviewById (id), HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<Review> createReview(@RequestBody Map<String, String> payload) {
        return new ResponseEntity<Review>(service.createReview(payload.get("reviewBody"), payload.get("imdbId")), HttpStatus.OK);
    }
}