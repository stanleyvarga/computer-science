#include "../../mint/mint.h"
#include <stdio.h>
#include <stdlib.h>

#define DEFAULT_CAPACITY 64

typedef int value_t;
typedef struct _vector *p_vector;
typedef struct _vector
{
	int capacity;
	int size;
	value_t *array;
} vector;

// void add(vector v, value_t number);
// void add_at(vector v, value_t number, int pos);
// void remove_at(vector v, value_t number, int pos);
// void pop();
// void get(vector v, int pos);
// void put(vector v, value_t number, int pos);
// void isEmpty();
// void size();

p_vector newVector()
{
	p_vector v = malloc(sizeof(vector));
	v->capacity = DEFAULT_CAPACITY;
	v->array = malloc(sizeof(value_t) * v->capacity);
	v->size = 0;

	return v;
}

int size(p_vector v)
{
	return v->size;
}

// size(&vec)

int vec_has_default_capacity_on_init()
{
	p_vector vec = newVector();

	_assert(vec->capacity == DEFAULT_CAPACITY);
	_assert(size(vec) == 0);

	return 0;
}

int ALL_TESTS()
{
	_run_tests(vec_has_default_capacity_on_init);
	return 0;
}
void SUITE()
{
	if (ALL_TESTS() == 0)
	{
		printf("\n 🎉  ALL TESTS PASSED\n");
		printf(" »   Tests run: %d\n", tests_run);
	}
}

int tests_run = 0;
int main()
{
	SUITE();

	return 0;
}