package dev.tomis.movies.service;

import dev.tomis.movies.entity.Movie;
import dev.tomis.movies.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
import java.util.Optional;

@Service
@CrossOrigin(origins = "*")
public class MovieService {

    @Autowired
    private MovieRepository repository;

    public List<Movie> findAllMovies() {
        return repository.findAll();
    }
    
    public Optional<Movie> findMovieByImdbId(String imdbId) {
        return repository.findMovieByImdbId(imdbId);
    }
}
