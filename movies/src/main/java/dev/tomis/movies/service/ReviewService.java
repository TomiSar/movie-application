package dev.tomis.movies.service;

import dev.tomis.movies.entity.Movie;
import dev.tomis.movies.entity.Review;
import dev.tomis.movies.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import org.bson.types.ObjectId;

@Service
@CrossOrigin(origins = "*")
public class ReviewService {
    @Autowired
    private ReviewRepository repository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public List<Review> findAllReviews() { return repository.findAll();}

    public Optional<Review> findReviewById(ObjectId id) {
        return repository.findById(id);
    }

    public Review createReview(String reviewBody, String imdbId) {
        Review review = repository.insert(new Review(reviewBody, LocalDateTime.now(), LocalDateTime.now()));
        mongoTemplate.update(Movie.class)
                .matching(Criteria.where("imdbId").is(imdbId))
                .apply(new Update().push("reviews").value(review))
                .first();

        return review;
    }
}
