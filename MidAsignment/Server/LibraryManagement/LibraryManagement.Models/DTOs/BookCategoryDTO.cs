﻿namespace LibraryManagement.Models
{
	public class BookCategoryDTO
	{
        //public int BookId { get; set; }
        //public int CategoryId { get; set; }

        public int BookId { get; set; }
        public Book Book { get; set; }
        public int CategoryId { get; set; }
        public Category Category { get; set; }
    }
}

